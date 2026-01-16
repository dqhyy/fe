import React, { useMemo, useState } from "react";

/* MOCK DATA */
const mockUsers = Array.from({ length: 138 }, (_, i) => ({
  id: (i).toString(),
  name: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
  created: "Jul 25, 2023 09:33",
  status: i % 5 === 0 ? "Deleted" : i % 3 === 0 ? "Deactivated" : "Active",
}));

const statusStyle = {
  Active: "text-green-600",
  Deactivated: "text-gray-500",
  Deleted: "text-red-500",
};

const ACTIONS_BY_STATUS = {
  Active: ["Deactivate", "Delete"],
  Deactivated: ["Activate", "Delete"],
  Deleted: ["Activate", "Deactivate"],
};


const UserManagement = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /* FILTER */
  const filteredUsers = useMemo(() => {
    return mockUsers.filter(
      (u) =>
        u.id.includes(search) ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleAction = (action, userId) => {
    setOpenMenu(null);

    switch (action) {
      case "Activate":
        alert(`Activate user ${userId}`);
        // axios.put(`/api/admin/users/${userId}/activate`)
        break;

      case "Deactivate":
        alert(`Deactivate user ${userId}`);
        // axios.put(`/api/admin/users/${userId}/deactivate`)
        break;

      case "Delete":
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        alert(`Delete user ${userId}`);
        // axios.delete(`/api/admin/users/${userId}`)
        break;

      default:
        break;
    }
  };



  /* PAGINATION */
  const total = filteredUsers.length;
  const totalPages = Math.ceil(total / rowsPerPage);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredUsers.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage, filteredUsers]);

  const from = (page - 1) * rowsPerPage + 1;
  const to = Math.min(page * rowsPerPage, total);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h1 className="text-xl font-semibold">
            Users <span className="text-gray-400">({total})</span>
          </h1>

          <input
            type="text"
            placeholder="Search by user name, email or ID"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="border rounded-lg px-4 py-2 w-full md:w-80 text-sm"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">User</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Created</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right"></th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    U
                  </div>
                  <span className="text-gray-600">{user.id}</span>
                </td>

                <td className="p-3">{user.name}</td>
                <td className="p-3 text-gray-600">{user.email}</td>
                <td className="p-3 text-gray-600">{user.created}</td>
                <td className={`p-3 font-medium ${statusStyle[user.status]}`}>
                  {user.status}
                </td>

                <td className="p-3 text-right relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === user.id ? null : user.id);
                    }}
                    className="px-2 py-1 rounded hover:bg-gray-200"
                  >
                    ⋮
                  </button>

                  {openMenu === user.id && (
                    <div className="absolute right-2 mt-2 w-36 bg-white border rounded-lg shadow z-20">
                      {ACTIONS_BY_STATUS[user.status].map((action) => (
                        <button
                          key={action}
                          onClick={() => handleAction(action, user.id)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100
            ${action === "Delete" ? "text-red-600 hover:bg-red-50" : ""}`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </td>


              </tr>
            ))}

            {paginatedUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 text-sm text-gray-600">
          {/* Rows per page */}
          <div>
            Rows per page:
            <select
              className="ml-2 border rounded px-2 py-1"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <span>
              {from}–{to} of {total}
            </span>

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-2 py-1 rounded border disabled:opacity-40"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .slice(Math.max(0, page - 3), page + 2)
              .map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded border ${p === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                    }`}
                >
                  {p}
                </button>
              ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-2 py-1 rounded border disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
