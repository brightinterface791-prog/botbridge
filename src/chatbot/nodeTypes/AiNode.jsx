import { Handle, Position } from "@xyflow/react";
import { Bot } from "lucide-react";

const AiNode = ({ data }) => {
  return (
    <div className="min-w-[280px] rounded-xl overflow-hidden border border-green-500 bg-[#0F172A] shadow-lg">

      <Handle type="target" position={Position.Top} className="!bg-green-500"/>

      <div className="bg-green-600 px-4 py-3 flex items-center gap-2">
        <Bot size={18} className="text-white"/>
        <span className="font-semibold text-white">
          AI Assistant
        </span>
      </div>

      <div className="space-y-3 p-4">

        <div>
          <div className="text-xs text-slate-400">
            Model
          </div>

          <div className="rounded bg-slate-800 px-3 py-2 text-white">
            {data?.model || "GPT-4.1"}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">
            Prompt
          </div>

          <div className="rounded bg-slate-800 p-3 text-sm text-slate-200">
            {data?.prompt || "Answer customer queries intelligently."}
          </div>
        </div>

      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-green-500"/>

    </div>
  );
};

export default AiNode;