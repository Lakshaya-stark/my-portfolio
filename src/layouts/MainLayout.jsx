import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0f0f10] text-[#e4e4e7]">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">{children}</div>
    </div>
  );
}
