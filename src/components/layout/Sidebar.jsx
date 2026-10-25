import {
  LayoutDashboard,
  Bot,
  Workflow,
  BarChart3,
  Settings,
  PlugZap,
  HomeIcon,
  MessageCircle,
} from "lucide-react";

import logo from "../../assets/new_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import iconLogo from "../../assets/logo-icon.png";

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      title: "Home",
      icon: <HomeIcon size={20} />,
      path: "/dashboard",
    },
    {
      title: "Inbox",
      icon: <MessageCircle size={20} />,
      path: "/inbox",
    },
    {
      title: "Tenants",
      icon: <LayoutDashboard size={20} />,
      path: "/tenants",
    },
    {
      title: "Chatbots",
      icon: <Bot size={20} />,
      path: "/chatbots",
    },
    {
      title: "Contacts",
      icon: <LayoutDashboard size={20} />,
      path: "/contacts",
    },
    {
      title: "Connections",
      icon: <PlugZap size={20} />,
      path: "/connections",
    },
    {
      title: "Workflows",
      icon: <Workflow size={20} />,
      path: "/workflows",
    },
    {
      title: "Broadcasting",
      icon: <PlugZap size={20} />,
      path: "/broadcast",
    },
    {
      title: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/analytics",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`hidden lg:flex h-screen flex-col border-r border-slate-800 bg-slate-950 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className={`flex h-20 items-center border-b border-slate-800 px-6 ${collapsed ? "justify-center" : "gap-3"}`}>
        <img
          src={iconLogo}
          alt="BotBridge"
          className="h-8 w-8 object-contain"
        />
        {!collapsed && (
          <span className="text-xl font-bold text-white whitespace-nowrap">Bot Bridge</span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {menus.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.title}
              title={collapsed ? item.title : ""}
              onClick={() => navigate(item.path)}
              className={`flex cursor-pointer items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                collapsed ? "justify-center" : "gap-4"
              } ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <span className={isActive ? "text-cyan-400" : "text-slate-500"}>
                {item.icon}
              </span>

              {!collapsed && <span>{item.title}</span>}
            </div>
          );
        })}
      </div>
    </aside>
  );
}