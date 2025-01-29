import React from "react";
import { X, Home, UserPlus, Building, BarChart3 } from "lucide-react";

const Sidebar = ({isOpen, setIsOpen, setIsModalOpen}) => {
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setIsOpen(false)
  };
  

  const menuItems = [
    { icon: Home, label: "Home", slug: "/" },
    { icon: UserPlus, label: "Registration", slug: "/Receptionist" },
    { icon: Building, label: "Department", slug: "/DepartmentStaff" },
    { icon: BarChart3, label: "Admin Dashboard", slug: "/Admin" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.slug}>
              <button
                onClick={toggleModal}
                className="flex items-center w-full p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <item.icon size={20} className="mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
