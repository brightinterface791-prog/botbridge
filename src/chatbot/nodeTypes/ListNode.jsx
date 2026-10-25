import { Handle, Position } from "@xyflow/react";
import { List } from "lucide-react";

const ListNode = ({ data }) => {
  const items = data?.items || [
    "Product Enquiry",
    "Support",
    "Pricing",
  ];

  return (
    <div className="min-w-[280px] rounded-xl overflow-hidden border border-cyan-500 bg-[#0F172A] shadow-lg">

      <Handle type="target" position={Position.Top} className="!bg-cyan-500 !w-3 !h-3"/>

      <div className="bg-cyan-600 px-4 py-3 flex items-center gap-2">
        <List size={18} className="text-white"/>
        <span className="text-white font-semibold">
          List Message
        </span>
      </div>

      <div className="p-4 space-y-2">

        <div className="text-sm text-white">
          {data?.title || "Choose an option"}
        </div>

        {items.map((item,index)=>(
          <div
            key={index}
            className="rounded bg-slate-800 px-3 py-2 text-sm text-slate-200"
          >
            {item}
          </div>
        ))}

      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-cyan-500 !w-3 !h-3"/>

    </div>
  );
};

export default ListNode;