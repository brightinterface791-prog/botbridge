import {
  MessageCircle,
  CheckCircle2,
  Clock3,
  PlayCircle,
} from "lucide-react";

const campaigns = [
  {
    name: "Diwali Offer Campaign",
    recipients: "24,580 Contacts",
    status: "Running",
  },
  {
    name: "Payment Reminder",
    recipients: "8,240 Contacts",
    status: "Scheduled",
  },
  {
    name: "Festival Sale",
    recipients: "15,620 Contacts",
    status: "Completed",
  },
];

const statusStyles = {
  Running: {
    icon: PlayCircle,
    badge: "bg-emerald-100 text-emerald-700",
  },
  Scheduled: {
    icon: Clock3,
    badge: "bg-violet-100 text-violet-700",
  },
  Completed: {
    icon: CheckCircle2,
    badge: "bg-sky-100 text-sky-700",
  },
};

export default function RecentCampaigns() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Broadcasts
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your latest WhatsApp campaigns
          </p>
        </div>

        <MessageCircle className="h-6 w-6 text-violet-400" />
      </div>

      <div className="space-y-4 p-6">
        {campaigns.map((campaign) => {
          const StatusIcon = statusStyles[campaign.status].icon;

          return (
            <div
              key={campaign.name}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-violet-500 hover:bg-slate-800"
            >
              <div>
                <h3 className="font-semibold text-white">
                  {campaign.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {campaign.recipients}
                </p>
              </div>

              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${statusStyles[campaign.status].badge}`}
              >
                <StatusIcon size={16} />
                {campaign.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}