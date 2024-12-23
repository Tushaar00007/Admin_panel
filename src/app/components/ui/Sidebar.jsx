"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      className={`h-screen bg-gray-900 fixed top-0 left-0 ${
        isOpen ? "w-60" : "w-16"
      } transition-all duration-300 text-white flex flex-col`}
    >
      {/* Logo */}
      <div className="p-4 flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          className="text-lg font-bold"
        >
        CLASSMATE
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-4 space-y-4">
        <SidebarItem isOpen={isOpen} href="#" label="Dashboard" icon="🏠" />
        <SidebarItem isOpen={isOpen} href="#" label="Profile" icon="👤" />
        <SidebarItem isOpen={isOpen} href="#" label="Settings" icon="⚙️" />
        <SidebarItem isOpen={isOpen} href="#" label="Logout" icon="↩️" />
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10"
        />
        {isOpen && <span className="font-medium">Manu Arora</span>}
      </div>
   
    </motion.div>
  );
};
// {isOpen && <span className="font-medium">Manu Arora</span>}
const SidebarItem = ({ href, label, icon, isOpen }) => (
  <Link href={href}>
    <motion.div
      className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded-lg"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="text-base">{label}</span>}
    </motion.div>
  </Link>
);

export default Sidebar;
