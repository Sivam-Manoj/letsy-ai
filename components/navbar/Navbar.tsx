"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaCog,
  FaHome,
  FaStore,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="text-xl" /> },
  { name: "Store", path: "/store", icon: <FaStore className="text-xl" /> },
  { name: "Analytics", path: "/analytics", icon: <FaChartLine className="text-xl" /> },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={`h-screen bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo + Collapse Toggle */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            Letsy AI
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-600 hover:text-gray-800 transition-colors"
          type="button"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
              !isCollapsed ? "space-x-3" : ""
            } ${pathname === item.path ? "bg-orange-50 text-orange-600 border-r-4 border-orange-500" : ""}`}
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div className="border-t border-gray-200 p-4 relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center w-full p-2 rounded-lg hover:bg-orange-50 transition-colors"
          type="button"
          aria-label="Toggle profile menu"
        >
          <FaUserCircle className="text-2xl text-gray-600" />
          {!isCollapsed && <span className="ml-3 text-gray-700">Profile</span>}
        </button>

        {/* Profile Dropdown */}
        {isProfileOpen && !isCollapsed && (
          <div className="absolute bottom-full left-0 w-full mb-2 bg-white rounded-lg shadow-lg border border-gray-200">
            <Link
              href="/profile"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              <FaUserCircle className="text-xl" />
              <span>My Profile</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
            >
              <FaCog className="text-xl" />
              <span>Settings</span>
            </Link>
            <button
              className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => {
                console.log("Logout clicked");
              }}
              type="button"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
