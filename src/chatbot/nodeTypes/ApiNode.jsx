import { Handle, Position } from "@xyflow/react";
import { Globe } from "lucide-react";

const ApiNode = ({ data }) => {
  return (
    <div className="min-w-[260px] overflow-hidden rounded-xl border border-indigo-500 bg-[#0F172A] shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-2 bg-indigo-600 px-4 py-3">
        <Globe size={18} className="text-white" />
        <span className="font-semibold text-white">
          API Request
        </span>
      </div>

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-indigo-500"
      />

      {/* Body */}
      <div className="space-y-3 p-4 text-sm">

        <div>
          <p className="text-slate-400">Method</p>

          <div className="mt-1 rounded-md bg-slate-800 px-3 py-2 text-green-400">
            {data?.method || "GET"}
          </div>
        </div>

        <div>
          <p className="text-slate-400">Endpoint</p>

          <div className="mt-1 truncate rounded-md bg-slate-800 px-3 py-2 text-slate-200">
            {data?.url || "https://api.example.com"}
          </div>
        </div>

        <div>
          <p className="text-slate-400">Status</p>

          <span className="inline-flex rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
            Ready
          </span>
        </div>

      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !bg-indigo-500"
      />

    </div>
  );
};

export default ApiNode;