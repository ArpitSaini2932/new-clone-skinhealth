import { Link, useLocation } from "react-router-dom";
import img from '../import/import';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 hover:opacity-80 transition duration-200">
          <img src={img.skinHealth} alt="SkinHealth" className="h-9 w-auto" />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-2 list-none">
          <li>
            <Link
              to="/skin-analysis"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-teal-400 text-white text-sm font-bold shadow-md shadow-violet-200 hover:opacity-90 hover:-translate-y-0.5 transition duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              AI Analysis
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                location.pathname === "/about"
                  ? "bg-violet-50 text-violet-600 font-semibold"
                  : "text-slate-500 hover:bg-violet-50 hover:text-slate-800"
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <ul className="flex items-center gap-3 list-none">
          <li>
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl text-sm font-medium text-slate-600 border border-violet-200 hover:bg-violet-50 hover:border-violet-300 hover:text-slate-800 transition duration-200"
            >
              Log in
            </Link>
          </li>
          <div className="w-px h-5 bg-violet-100" />
          <li>
            <Link
              to="/Signup"
              className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-700 transition duration-200"
            >
              Sign Up
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;