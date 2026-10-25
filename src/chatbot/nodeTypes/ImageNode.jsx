import { Handle, Position } from "@xyflow/react";
import { ImageIcon } from "lucide-react";

const ImageNode = ({ data }) => {
  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-pink-500 bg-[#0F172A] shadow-lg">

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !bg-pink-500"
      />

      {/* Header */}
      <div className="flex items-center gap-2 bg-pink-600 px-4 py-3">
        <ImageIcon size={18} className="text-white" />

        <span className="font-semibold text-white">
          Image Message
        </span>
      </div>

      {/* Body */}
      <div className="space-y-4 p-4">

        {/* Image Preview */}
        <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
          <img
            src={
              data?.image ||
              "https://placehold.co/400x220/1e293b/ffffff?text=Image+Preview"
            }
            alt="Preview"
            className="h-40 w-full object-cover"
          />
        </div>

        {/* Caption */}
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Caption
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-200">
            {data?.caption || "Your image caption goes here..."}
          </div>
        </div>

        {/* File Name */}
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
            File
          </p>

          <div className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-cyan-300">
            {data?.fileName || "image.jpg"}
          </div>
        </div>

      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !bg-pink-500"
      />

    </div>
  );
};

export default ImageNode;