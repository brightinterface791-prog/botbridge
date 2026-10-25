import { Settings } from "lucide-react";

const EmptyPanel = () => {
  return (
    <div className="flex w-80 flex-col border-l border-slate-700 bg-[#020817]">
      <div className="flex items-center gap-2 border-b border-slate-700 px-5 py-4">
        <Settings size={18} className="text-cyan-400" />
        <h2 className="text-lg font-semibold text-white">
          Properties
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 text-center text-slate-400">
        Select a node to edit its properties.
      </div>
    </div>
  );
};

export default EmptyPanel;