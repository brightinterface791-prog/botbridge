export default function ActivityCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <h3 className="mb-4 text-sm font-semibold text-slate-200">
        Recent Activity
      </h3>

      <div className="space-y-2">
        <div className="rounded-xl border border-white/10 p-3 text-xs text-slate-300">
          WhatsApp Connected
        </div>

        <div className="rounded-xl border border-white/10 p-3 text-xs text-slate-300">
          AI Agent Created
        </div>

        <div className="rounded-xl border border-white/10 p-3 text-xs text-slate-300">
          Workflow Published
        </div>
      </div>
    </div>
  );
}