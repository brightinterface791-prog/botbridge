import {
  Bot,
  MessageCircle,
  Database,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Connect Channel",
    icon: MessageCircle,
  },
  {
    title: "Create Agent",
    icon: Bot,
  },
  {
    title: "Knowledge Base",
    icon: Database,
  },
  {
    title: "Invite Team",
    icon: Users,
  },
];

export default function QuickActions() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <div
            key={action.title}
            className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-cyan-500 hover:bg-white/[0.05]"
          >
            <Icon
              size={18}
              className="mb-2 text-cyan-400"
            />

            <h4 className="text-xs font-medium text-slate-200">
              {action.title}
            </h4>
          </div>
        );
      })}
    </div>
  );
}