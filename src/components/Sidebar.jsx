import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen fixed top-0 left-0 bg-[#111112] border-r border-[#2a2a2e] p-6 flex flex-col justify-between">
      {/* TOP */}
      <div>
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
          <span className="text-sm tracking-wide">Stark</span>
        </div>

        <nav className="flex flex-col gap-6 text-zinc-400">
          <NavItem to="/" label="Home" />
          <NavItem to="/web" label="Web" />
          <NavItem to="/cybersecurity" label="Cyber" />
          <NavItem to="/systems" label="Systems" />
          <NavItem to="/ai" label="AI" />
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="text-xs text-zinc-500">© 2026 Stark</div>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative group transition ${
          isActive ? "text-[#d4af37]" : "hover:text-white"
        }`
      }
    >
      {label}

      {/* underline */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
}
