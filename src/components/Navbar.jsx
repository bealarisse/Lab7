import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <Link to="/" className="text-lg font-extrabold">
          Student Portal
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>

          <Link to="/students" className="hover:text-red-400">
            Students
          </Link>

          <Link to="/faculties" className="hover:text-red-400">
            Faculty
          </Link>
        </div>
      </div>
    </nav>
  );
}