import { Handle, Position } from "@xyflow/react";
import { Database } from "lucide-react";

const DatabaseNode = ({ data }) => {
  return (
    <div className="min-w-[280px] rounded-xl overflow-hidden border border-sky-500 bg-[#0F172A] shadow-lg">

      <Handle type="target" position={Position.Top} className="!bg-sky-500"/>

      <div className="bg-sky-600 px-4 py-3 flex items-center gap-2">
        <Database size={18} className="text-white"/>
        <span className="font-semibold text-white">
          Database
        </span>
      </div>

      <div className="space-y-3 p-4">

        <div>
          <div className="text-xs text-slate-400">
            Operation
          </div>

          <div className="rounded bg-slate-800 px-3 py-2 text-white">
            {data?.operation || "Insert"}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">
            Table
          </div>

          <div className="rounded bg-slate-800 px-3 py-2 text-white">
            {data?.table || "customers"}
          </div>
        </div>

      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-sky-500"/>

    </div>
  );
};

export default DatabaseNode;