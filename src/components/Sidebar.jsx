import { NavLink } from "react-router-dom";
import { Home, User, Settings, X } from "lucide-react";

const Sidebar = ({ onClose }) => {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];
  

  return (
    <div className="min-h-screen w-64 bg-[#111827] text-gray-200 p-4 shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-[#01A9B6]">MyDashboard</h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-[#1f2937] rounded-md"
        >
          <X size={20} />
        </button>
      </div>
      <ul className="space-y-4">
        {navItems.map(({ name, path, icon }) => (
          <li key={name}>
            
            <NavLink
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  isActive ? "bg-[#01A9B6] text-white" : "hover:bg-[#1f2937]"
                }`
              }

              
            >
              {icon}
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
