import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

const activities = [
  {
    title: "WhatsApp campaign completed",
    time: "10 minutes ago",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    border: "border-emerald-500",
  },
  {
    title: "Email campaign scheduled",
    time: "Today • 5:00 PM",
    icon: Clock3,
    color: "text-violet-600",
    bg: "bg-violet-100",
    border: "border-violet-500",
  },
  {
    title: "SMS campaign failed",
    time: "Invalid recipients",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
    border: "border-red-500",
  },
];

export default function BroadcastActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest updates from your broadcast campaigns
        </p>
      </div>

      <div className="space-y-4 p-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className={`flex items-start gap-4 rounded-xl border-l-4 ${activity.border} bg-slate-50 p-4 transition hover:bg-slate-100`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${activity.bg}`}
              >
                <Icon className={`h-5 w-5 ${activity.color}`} />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}