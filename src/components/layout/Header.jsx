import {
  Bell,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useAuth } from "../../context/AuthProvider";

export default function Header({ collapsed, setCollapsed, headerContent }) {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 backdrop-blur-md">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
        {headerContent ? (
          headerContent
        ) : (
          <div>
            <h1 className="text-xl font-semibold text-slate-100">
              Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Welcome back to BotBridge 🚀
            </p>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 lg:flex">
          <Search size={16} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none text-slate-200 placeholder:text-slate-600 w-48"
          />
        </div>

        {/* Notification */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 transition">
          <Bell size={18} />
        </button>

        {/* Profile */}
        <div className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 hover:bg-slate-800 transition">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-xs font-bold text-slate-950">
            {user?.name?.[0] || "A"}
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-200">
              {user?.name || "Admin"}
            </h4>
          </div>

          <ChevronDown
            size={14}
            className="text-slate-500"
          />
        </div>
      </div>
    </header>
  );
}