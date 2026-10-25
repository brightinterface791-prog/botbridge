import {
  Bot,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";

export default function StatsCards() {
  const stats = [
    {
      title: "Active Bots",
      value: "32",
      change: "+24%",
      icon: <Bot size={18} />,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Messages",
      value: "12.4K",
      change: "+18%",
      icon: <MessageCircle size={18} />,
      color: "from-cyan-500 to-blue-400",
    },
    {
      title: "Users",
      value: "1.8K",
      change: "+12%",
      icon: <Users size={18} />,
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Growth",
      value: "98%",
      change: "+9%",
      icon: <TrendingUp size={18} />,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:scale-[1.02]"
        >
          {/* Glow */}
          <div
            className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl`}
          />

          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white">
              {item.icon}
            </div>

            <span className="text-xs font-medium text-green-400">
              {item.change}
            </span>
          </div>

          {/* Value */}
          <h2 className="mt-4 text-3xl font-bold text-white">
            {item.value}
          </h2>

          {/* Title */}
          <p className="mt-1 text-sm text-gray-400">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}