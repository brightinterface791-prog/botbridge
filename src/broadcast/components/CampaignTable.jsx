import {
  MoreHorizontal,
  MessageCircle,
  PlayCircle,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const campaigns = [
  {
    name: "Diwali Offer Campaign",
    audience: "24,580",
    delivered: "23,950",
    status: "Running",
    created: "Today",
  },
  {
    name: "Payment Reminder",
    audience: "8,240",
    delivered: "-",
    status: "Scheduled",
    created: "Tomorrow",
  },
  {
    name: "Festival Sale",
    audience: "15,620",
    delivered: "15,108",
    status: "Completed",
    created: "28 Jun",
  },
];

const statusConfig = {
  Running: {
    icon: PlayCircle,
    className:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  Scheduled: {
    icon: Clock3,
    className:
      "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  },
  Completed: {
    icon: CheckCircle2,
    className:
      "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  },
};

export default function CampaignTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Broadcast Campaigns
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Recent WhatsApp broadcasts
          </p>
        </div>

        <MessageCircle className="h-6 w-6 text-violet-400" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-950">
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4 font-medium">Campaign</th>
              <th className="px-6 py-4 font-medium">Audience</th>
              <th className="px-6 py-4 font-medium">Delivered</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Created</th>
              <th className="px-6 py-4 text-right font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((campaign) => {
              const StatusIcon = statusConfig[campaign.status].icon;

              return (
                <tr
                  key={campaign.name}
                  className="border-t border-slate-800 transition hover:bg-slate-800/60"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-white">
                        {campaign.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        WhatsApp Broadcast
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {campaign.audience}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {campaign.delivered}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${statusConfig[campaign.status].className}`}
                    >
                      <StatusIcon size={14} />
                      {campaign.status}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-slate-400">
                    {campaign.created}
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}