import { Settings } from "lucide-react";

const Panel = ({ title, children, footer }) => {
  return (
    <div className="flex w-80 flex-col border-l border-slate-700 bg-[#020817]">

      <div className="flex items-center gap-2 border-b border-slate-700 px-5 py-4">
        <Settings size={18} className="text-cyan-400" />

        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-5 p-5">
        {children}
      </div>

      {footer}
    </div>
  );
};

export default Panel;