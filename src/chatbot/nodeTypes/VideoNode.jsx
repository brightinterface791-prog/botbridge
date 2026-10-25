import { Handle, Position } from "@xyflow/react";
import { Video } from "lucide-react";

const VideoNode = ({ data }) => {
  return (
    <div className="min-w-[270px] rounded-xl overflow-hidden border border-violet-500 bg-[#0F172A] shadow-lg">

      <Handle type="target" position={Position.Top} className="!bg-violet-500"/>

      <div className="bg-violet-600 px-4 py-3 flex items-center gap-2">
        <Video size={18} className="text-white"/>
        <span className="font-semibold text-white">
          Video Message
        </span>
      </div>

      <div className="p-4">

        <div className="flex h-32 items-center justify-center rounded-lg bg-slate-800 text-5xl">
          🎥
        </div>

        <div className="mt-3 text-sm text-white">
          {data?.caption || "Video Caption"}
        </div>

      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-violet-500"/>

    </div>
  );
};

export default VideoNode;