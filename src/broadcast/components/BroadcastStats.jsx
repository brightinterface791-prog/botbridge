import {
  Send,
  Play,
  Calendar,
  FileText,
  CheckCircle,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total",
    value: "48",
    icon: Send,
  },
  {
    title: "Running",
    value: "4",
    icon: Play,
  },
  {
    title: "Scheduled",
    value: "7",
    icon: Calendar,
  },
  {
    title: "Draft",
    value: "9",
    icon: FileText,
  },
  {
    title: "Completed",
    value: "28",
    icon: CheckCircle,
  },
  {
    title: "Failed",
    value: "3",
    icon: XCircle,
  },
];

export default function BroadcastStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-100">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-xl bg-slate-800 p-3">
                <Icon
                  size={22}
                  className="text-cyan-400"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}