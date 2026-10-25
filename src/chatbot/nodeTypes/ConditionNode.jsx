import { Handle, Position } from "@xyflow/react";
import { GitBranch } from "lucide-react";

const ConditionNode = ({ data }) => {
  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-orange-500 bg-[#0F172A] shadow-lg">

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-orange-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 bg-orange-600 px-4 py-3">
        <GitBranch size={18} className="text-white" />

        <span className="font-semibold text-white">
          Condition
        </span>
      </div>

      {/* Body */}
      <div className="space-y-4 p-4">

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Variable
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-white">
            {data?.variable || "{{user_response}}"}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Operator
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-green-400">
            {data?.operator || "Equals"}
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Value
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-cyan-300">
            {data?.value || "Yes"}
          </div>
        </div>

      </div>

      {/* YES Output */}
      <Handle
        type="source"
        id="yes"
        position={Position.Left}
        style={{
          top: "85%",
          background: "#22C55E",
          width: 12,
          height: 12,
        }}
      />

      <div
        className="absolute left-4 bottom-2 text-xs font-semibold text-green-400"
      >
        TRUE
      </div>

      {/* NO Output */}
      <Handle
        type="source"
        id="no"
        position={Position.Right}
        style={{
          top: "85%",
          background: "#EF4444",
          width: 12,
          height: 12,
        }}
      />

      <div
        className="absolute right-4 bottom-2 text-xs font-semibold text-red-400"
      >
        FALSE
      </div>

    </div>
  );
};

export default ConditionNode;