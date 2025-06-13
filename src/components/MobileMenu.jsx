import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contact
      </a>

      {/* ✅ Resume Download Button for Mobile */}
      <a
        href="https://drive.google.com/uc?export=download&id=12hD96NWoDUiRKnOi_HU2bYjCXiAfaoSl"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg py-2 px-6 rounded-lg mt-6 font-medium shadow 
          hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Download Resume
      </a>
    </div>
  );
};
