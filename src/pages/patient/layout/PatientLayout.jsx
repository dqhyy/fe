import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const PatientLayout = () => {
  return (
    <div className="flex bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col">    
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PatientLayout;
