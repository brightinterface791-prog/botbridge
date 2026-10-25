import { Handle, Position } from "@xyflow/react";
import { MousePointerClick } from "lucide-react";

const ButtonNode = ({ data }) => {
  const buttons = data?.buttons || [
    "Yes",
    "No",
    "Talk to Agent",
  ];

  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-blue-500 bg-[#0F172A] shadow-lg">

      {/* Input */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-blue-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 bg-blue-600 px-4 py-3">
        <MousePointerClick size={18} className="text-white" />

        <span className="font-semibold text-white">
          Button Message
        </span>
      </div>

      {/* Body */}
      <div className="space-y-3 p-4">

        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-slate-400">
            Message
          </p>

          <div className="rounded-lg bg-slate-800 p-3 text-sm text-slate-200">
            {data?.message ||
              "How can we help you today?"}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">
            Buttons
          </p>

          <div className="space-y-2">
            {buttons.map((button, index) => (
              <div
                key={index}
                className="rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-2 text-center text-sm font-medium text-blue-300"
              >
                {button}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Output */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !bg-blue-500"
      />
    </div>
  );
};

export default ButtonNode;