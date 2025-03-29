import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <nav className="bg-gray-800 text-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold hidden md:block">
              {/* Hide this text on mobile */}
              Khan Web Services
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </a>
              <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                About
              </a>
              <a href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Services
              </a>
              <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </a>
            <a href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
              About
            </a>
            <a href="/services" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
              Services
            </a>
            <a href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}