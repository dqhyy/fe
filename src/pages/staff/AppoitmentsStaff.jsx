import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getAllAppointments, confirmAppointment, cancelAppointment, reorderAppointments } from "../../services/staffService";
import { getAllDoctors } from "../../services/doctorService";
import { CheckCircle, XCircle, ArrowLeft, Clock, User, Save, RotateCcw, Calendar, ChevronRight } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const AppointmentsStaff = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modes: 'overview' | 'detail'
  const [viewMode, setViewMode] = useState('overview');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  // Detail View State (Split Columns)
  const [detailColumns, setDetailColumns] = useState({
    pending: [],
    confirmed: []
  });

  // Modals
  const [rejectingAppointment, setRejectingAppointment] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [apptData, docData] = await Promise.all([
        getAllAppointments(),
        getAllDoctors()
      ]);
      setAppointments(apptData);
      setDoctors(docData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setAppointments([]);
      setDoctors([]);
    } finally {
      setLoading(false);
    }
  };

  // Derived Data: Groups
  const getGroups = () => {
    const groups = {
      unassigned: { id: 'unassigned', title: 'Chưa chỉ định', type: 'unassigned', count: 0, items: [] },
    };

    doctors.forEach(d => {
      groups[d.id] = {
        id: d.id,
        title: d.name || d.fullName || "Bác sĩ",
        specialty: d.specialty?.name || d.specialty,
        image: d.image,
        type: 'doctor',
        count: 0,
        items: []
      };
    });

    appointments.forEach(a => {
      if (a.status === 'REJECTED' || a.status === 'FINISHED') return;

      const docId = a.doctorId ? parseInt(a.doctorId) : 'unassigned';

      if (groups[docId]) {
        groups[docId].items.push(a);
        if (a.status === 'PENDING') {
          groups[docId].count++;
        }
      } else if (!a.doctorId) {
        groups.unassigned.items.push(a);
        if (a.status === 'PENDING') groups.unassigned.count++;
      }
    });

    // Sort items by order
    Object.values(groups).forEach(g => {
      g.items.sort((a, b) => {
        const orderA = a.appointmentOrder !== null ? a.appointmentOrder : 9999;
        const orderB = b.appointmentOrder !== null ? b.appointmentOrder : 9999;
        return orderA - orderB;
      });
    });

    return groups;
  };

  const groups = getGroups();

  // Handlers
  const handleSelectGroup = (groupId) => {
    setSelectedDoctorId(groupId);
    const items = groups[groupId].items;

    // Split items into Pending (Left) and Confirmed (Right)
    if (groupId === 'unassigned') {
      setDetailColumns({
        pending: items,
        confirmed: []
      });
    } else {
      setDetailColumns({
        pending: items.filter(i => i.status === 'PENDING'),
        confirmed: items.filter(i => i.status === 'CONFIRMED')
      });
    }

    setViewMode('detail');
  };

  const handleBack = () => {
    setViewMode('overview');
    setSelectedDoctorId(null);
    setDetailColumns({ pending: [], confirmed: [] });
    fetchData();
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceList = [...detailColumns[source.droppableId]];
    const destList = source.droppableId === destination.droppableId ? sourceList : [...detailColumns[destination.droppableId]];

    const [movedItem] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, movedItem);

    setDetailColumns({
      ...detailColumns,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList
    });
  };

  const handleSaveOrder = async () => {
    if (!selectedDoctorId) return;

    // Prepare info for API
    const updates = [];

    // Items in Confirmed List -> CONFIRMED
    detailColumns.confirmed.forEach((item, index) => {
      updates.push({
        id: item.id,
        doctorId: selectedDoctorId === 'unassigned' ? null : parseInt(selectedDoctorId),
        order: index
      });
    });

    // Items in Pending List -> PENDING (Order irrelevant? or preserve?)
    detailColumns.pending.forEach((item, index) => {
      updates.push({
        id: item.id,
        doctorId: selectedDoctorId === 'unassigned' ? null : parseInt(selectedDoctorId),
        order: index + 1000 // Push pending to end of order sequence
      });
    });

    try {
      await reorderAppointments(updates);

      // Note: Backend might confirm items if assigned, but we rely on reorder mostly for the Right column.

      toast.success("Đã cập nhật lịch làm việc!");
      fetchData();
    } catch (error) {
      toast.error("Lỗi: " + error.message);
    }
  };

  // Reject
  const handleReject = async () => {
    try {
      await cancelAppointment(rejectingAppointment.id);
      // Remove from local
      setDetailColumns(prev => ({
        pending: prev.pending.filter(i => i.id !== rejectingAppointment.id),
        confirmed: prev.confirmed.filter(i => i.id !== rejectingAppointment.id)
      }));
      fetchData();
      toast.success("Đã từ chối lịch hẹn.");
    } catch (error) {
      toast.error("Error: " + error.message);
    }
    setRejectingAppointment(null);
    setRejectReason("");
  };

  if (loading && viewMode === 'overview') return <div className="p-6">Đang tải dữ liệu...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {viewMode === 'overview' ? (
        /* OVERVIEW */
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-maincolor mb-6">Quản lý lịch hẹn</h1>

          {/* Unassigned Group (Only show if has items) */}
          {groups.unassigned.items.length > 0 && (
            <div className="mb-8">
              <div
                onClick={() => handleSelectGroup('unassigned')}
                className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">Chưa phân công bác sĩ</div>
                    <div className="text-sm text-red-600 font-medium">{groups.unassigned.items.length} cuộc hẹn đang chờ</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-maincolor font-semibold group-hover:translate-x-1 transition-transform">
                  Xử lý ngay <ChevronRight size={20} />
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(groups).filter(g => g.type === 'doctor' && g.count > 0).map(group => (
              <div
                key={group.id}
                onClick={() => handleSelectGroup(group.id)}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 cursor-pointer transition flex flex-col justify-between h-[200px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={group.image || `https://ui-avatars.com/api/?name=${group.title}&background=random`}
                      alt={group.title}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-gray-800 text-lg line-clamp-1">{group.title}</div>
                      <div className="text-sm text-blue-600 font-medium">{group.specialty}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    Lịch hẹn hôm nay: <span className="font-bold text-gray-800">{group.items.length}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 animate-pulse">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    {group.count} Cần xác nhận
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Show Empty State if NO doctors have pending */}
          {Object.values(groups).filter(g => g.type === 'doctor' && g.count > 0).length === 0 && groups.unassigned.items.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <CheckCircle size={64} className="mx-auto mb-4 text-green-200" />
              <p className="text-xl font-medium text-gray-500">Tuyệt vời! Tất cả lịch hẹn đã được xử lý.</p>
            </div>
          )}
        </div>
      ) : (
        /* DETAIL: SPLIT VIEW */
        <div className="max-w-[1600px] mx-auto h-[calc(100vh-3rem)] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="bg-white p-2 rounded-lg border hover:bg-gray-50 text-gray-600 transition"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  {selectedDoctorId === 'unassigned' ? 'Phân công Bác sĩ' : groups[selectedDoctorId]?.title}
                  <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    {detailColumns.pending.length + detailColumns.confirmed.length} Lịch hẹn
                  </span>
                </h1>
              </div>
            </div>
            <button
              onClick={handleSaveOrder}
              className="bg-maincolor text-white px-6 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200 font-medium"
            >
              <Save size={18} /> Lưu & Xác nhận ({detailColumns.confirmed.length})
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0 overflow-hidden">
              {/* UNARRANGED / LEFT */}
              <div className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-bold text-gray-700">Chưa xếp lịch (Pending)</h3>
                  <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-sm font-bold">{detailColumns.pending.length}</span>
                </div>
                <Droppable droppableId="pending">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`flex-1 overflow-y-auto p-4 space-y-3 ${snapshot.isDraggingOver ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      {detailColumns.pending.map((item, index) => (
                        <AppointmentCard key={item.id} item={item} index={index} onReject={() => setRejectingAppointment(item)} isPending />
                      ))}
                      {provided.placeholder}
                      {detailColumns.pending.length === 0 && (
                        <div className="text-center py-10 text-gray-400 italic">
                          Không có lịch hẹn chờ.
                        </div>
                      )}
                    </div>
                  )}
                </Droppable>
              </div>

              {/* ARRANGED / RIGHT */}
              <div className="flex flex-col bg-blue-50/50 rounded-xl border-2 border-blue-100 border-dashed overflow-hidden h-full">
                <div className="p-4 bg-blue-100/50 border-b border-blue-200 flex justify-between items-center">
                  <h3 className="font-bold text-blue-800">Đã xếp lịch (Confirmed)</h3>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-sm font-bold">{detailColumns.confirmed.length}</span>
                </div>
                <Droppable droppableId="confirmed">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`flex-1 overflow-y-auto p-4 space-y-3 transition-colors ${snapshot.isDraggingOver ? 'bg-blue-100/30' : ''}`}
                    >
                      {detailColumns.confirmed.map((item, index) => (
                        <AppointmentCard key={item.id} item={item} index={index} onReject={() => setRejectingAppointment(item)} />
                      ))}
                      {provided.placeholder}
                      {detailColumns.confirmed.length === 0 && (
                        <div className="text-center py-20 text-blue-300 flex flex-col items-center">
                          <RotateCcw size={32} className="mb-2 opacity-50" />
                          Kéo lịch hẹn vào đây để xác nhận
                        </div>
                      )}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </DragDropContext>
        </div>
      )}

      {/* Modal Reject */}
      {rejectingAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 bg-black/40 transition-opacity" />
          <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-2xl transform transition-all scale-100">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <XCircle size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Từ chối lịch hẹn?</h2>
              <p className="text-sm text-gray-500 mt-1">
                Bạn đang từ chối lịch hẹn của bệnh nhân <span className="font-bold text-gray-800">{rejectingAppointment.patientName}</span>.
              </p>
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lý do từ chối (bắt buộc):</label>
            <textarea
              className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-200 outline-none border-gray-300 transition"
              rows="3"
              placeholder="Nhập lý do..."
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setRejectingAppointment(null)}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition"
              >
                Quay lại
              </button>
              <button
                onClick={handleReject}
                disabled={!rejectReason}
                className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium shadow-lg shadow-red-200 disabled:opacity-50 disabled:shadow-none transition"
              >
                Xác nhận từ chối
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AppointmentCard = ({ item, index, onReject, isPending }) => {
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 bg-white rounded-xl border shadow-sm transition-all flex items-start justify-between group
                        ${snapshot.isDragging ? 'shadow-xl ring-2 ring-maincolor rotate-2 z-50' : 'hover:border-blue-300'}
                        ${isPending ? 'border-l-4 border-l-yellow-400' : 'border-l-4 border-l-green-500'}
                    `}
          style={provided.draggableProps.style}
        >
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-gray-800 truncate">{item.patientName}</h4>
              {isPending && <span className="w-2 h-2 rounded-full bg-yellow-500"></span>}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded border">
                <Clock size={12} className="text-gray-400" />
                <span className="font-medium text-gray-700">{item.appointmentDate}</span>
              </div>
              <span className="truncate text-gray-400">{item.specialty}</span>
            </div>
            {item.reasonForVisit && (
              <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded italic line-clamp-1 border border-gray-100">
                {item.reasonForVisit}
              </div>
            )}
          </div>

          <div className="flex flex-col items-end gap-2">
            {!isPending && (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold text-xs">
                {index + 1}
              </span>
            )}
            <button
              onClick={(e) => { e.stopPropagation(); onReject(); }}
              className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
              title="Từ chối"
            >
              <XCircle size={18} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default AppointmentsStaff;
