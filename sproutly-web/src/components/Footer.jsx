import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/70 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="leaf.png" alt="Sproutly" className="h-6 w-6 opacity-80" />
          <span className="text-white font-bold text-lg">Sproutly</span>
        </div>

        <nav className="flex gap-6 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/features" className="hover:text-white transition-colors">Features</NavLink>
          <NavLink to="/team" className="hover:text-white transition-colors">Team</NavLink>
          <NavLink to="/documents" className="hover:text-white transition-colors">Documents</NavLink>
        </nav>

        <p className="text-xs text-center">
          © 2025 Sproutly · CS491 Senior Design Project · Bilkent University
        </p>
      </div>
    </footer>
  );
}
