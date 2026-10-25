import { MessageCircle, Bot, Workflow } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      title: "New WhatsApp conversation",
      desc: "Customer inquiry received",
      time: "2m ago",
      icon: <MessageCircle size={18} />,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "AI Bot Updated",
      desc: "Workflow successfully deployed",
      time: "5m ago",
      icon: <Bot size={18} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Workflow Triggered",
      desc: "Automation executed successfully",
      time: "15m ago",
      icon: <Workflow size={18} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Recent Activity
        </h2>

        <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition">
          View All
        </button>
      </div>

      {/* List */}
      <div className="mt-5 space-y-3">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 hover:bg-white/[0.05] transition"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-medium text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Time */}
            <span className="text-xs text-slate-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}