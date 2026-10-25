import {
  Save,
  Play,
  Undo2,
  Redo2,
  ZoomIn,
  ZoomOut,
  Maximize,
  UploadCloud,
} from "lucide-react";

const Toolbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-12 items-center justify-between border-b border-slate-700 bg-[#020817] px-4">

      {/* Left */}
      <div className="flex items-center gap-3">

        <input
          type="text"
          defaultValue="Untitled Workflow"
          className="w-60 rounded-md border border-slate-700 bg-[#0F172A] px-3 py-1.5 text-xs text-white outline-none transition focus:border-cyan-500"
        />

        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-400">
          Draft
        </span>

      </div>

      {/* Center */}
      <div className="flex items-center gap-1">

        <button className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Undo2 size={15} />
        </button>

        <button className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Redo2 size={15} />
        </button>

        <button className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <ZoomOut size={15} />
        </button>

        <button className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <ZoomIn size={15} />
        </button>

        <button className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <Maximize size={15} />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        <button className="flex items-center gap-1 rounded-md border border-slate-700 bg-[#0F172A] px-3 py-1.5 text-xs text-white transition hover:bg-slate-800">
          <Play size={14} />
          Test
        </button>

        <button className="flex items-center gap-1 rounded-md border border-slate-700 bg-[#0F172A] px-3 py-1.5 text-xs text-white transition hover:bg-slate-800">
          <Save size={14} />
          Save
        </button>

        <button className="flex items-center gap-1 rounded-md bg-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-cyan-600">
          <UploadCloud size={14} />
          Publish
        </button>

      </div>

    </div>
  );
};

export default Toolbar;