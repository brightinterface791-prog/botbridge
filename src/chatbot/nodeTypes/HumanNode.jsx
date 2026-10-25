import { Handle, Position } from "@xyflow/react";
import { UserRound } from "lucide-react";

const HumanNode = ({ data }) => {
  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-emerald-500 bg-[#0F172A] shadow-lg">

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-emerald-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 bg-emerald-600 px-4 py-3">
        <UserRound size={18} className="text-white" />

        <span className="font-semibold text-white">
          Human Agent
        </span>
      </div>

      {/* Body */}
      <div className="space-y-4 p-4">

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Team
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-white">
            {data?.team || "Support Team"}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Assign To
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-white">
            {data?.agent || "Any Available Agent"}
          </div>
        </div>

        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
          👨‍💼 Conversation will be transferred to a live agent.
        </div>

      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !bg-emerald-500"
      />

    </div>
  );
};

export default HumanNode;