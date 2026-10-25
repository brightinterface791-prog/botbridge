import { Handle, Position } from "@xyflow/react";
import { FileText } from "lucide-react";

const PdfNode = ({ data }) => {
  return (
    <div className="min-w-[260px] rounded-xl overflow-hidden border border-red-500 bg-[#0F172A] shadow-lg">

      <Handle type="target" position={Position.Top} className="!bg-red-500"/>

      <div className="bg-red-600 px-4 py-3 flex items-center gap-2">
        <FileText size={18} className="text-white"/>
        <span className="font-semibold text-white">
          PDF Document
        </span>
      </div>

      <div className="p-4">

        <div className="rounded-lg bg-slate-800 p-3 text-white">
          {data?.fileName || "Company Profile.pdf"}
        </div>

        <div className="mt-3 text-sm text-slate-400">
          {data?.caption || "Download our brochure"}
        </div>

      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-red-500"/>

    </div>
  );
};

export default PdfNode;