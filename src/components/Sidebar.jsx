import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";

const Sidebar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Untuk deteksi klik di luar

  const sections = [
    "Finance",
    "Sales",
    "Service",
    "Marketing",
    "Website",
    "Productivity",
    "Supply_Chain",
    "Human_Resource",
  ];

  // Fungsi untuk menutup sidebar saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={sidebarRef} className="lg:w-64 bg-primary text-white p-4 rounded-r-[50px] lg:h-[750px]">
      {/* Tombol Menu untuk Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden block text-white text-2xl"
      >
        <FiMenu />
      </button>

      {/* Sidebar Menu */}
      <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              setIsOpen(false); // Sidebar langsung tertutup setelah klik
            }}
            className="block w-full lg:w-[229px] h-[56px] text-left font-bold p-2 my-1 rounded-[10px] hover:bg-gray-700 transition"
          >
            {section.replace("_", " ")} {/* Mengganti _ dengan spasi untuk tampilan */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
