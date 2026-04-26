import { Link, useLocation } from "react-router-dom";
import img from "../import/import";

const Navbar = () => {
  const location = useLocation();

  const navItem = (path, label) => {
    const isActive = location.pathname === path;

    return (
      <Link
        to={path}
        className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
          isActive
            ? "bg-blue-50 text-blue-600 shadow-sm"
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={img.skinHealth} alt="SkinHealth" className="h-9" />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-3">

          {/* AI BUTTON (highlighted) */}
          <Link
            to="/skin-analysis"
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition"
          >
            AI Analysis
          </Link>

          {navItem("/doctors", "Doctors")}
          {navItem("/appointments", "Appointments")}
          {navItem("/about", "About")}

        </div>

        {/* AUTH */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="px-4 py-2 text-sm text-gray-600 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/Signup"
            className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;