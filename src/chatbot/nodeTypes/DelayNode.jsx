import { Handle, Position } from "@xyflow/react";
import { Clock3 } from "lucide-react";

const DelayNode = ({ data }) => {
  return (
    <div className="relative min-w-[260px] overflow-hidden rounded-xl border border-amber-500 bg-[#0F172A] shadow-lg">

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-amber-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 bg-amber-500 px-4 py-3">
        <Clock3 size={18} className="text-white" />

        <span className="font-semibold text-white">
          Delay
        </span>
      </div>

      {/* Body */}
      <div className="space-y-4 p-4">

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Wait Duration
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-lg font-semibold text-white">
            {data?.duration || 5}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Unit
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-cyan-300">
            {data?.unit || "Seconds"}
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
          Workflow will pause before executing the next node.
        </div>

      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !bg-amber-500"
      />

    </div>
  );
};

export default DelayNode;