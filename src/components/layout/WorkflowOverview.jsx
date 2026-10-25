import { MessageCircle, Workflow, Globe } from "lucide-react";

export default function WorkflowOverview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#07111f] to-[#020817] p-5">

      {/* Glow Effects */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Workflow Overview
        </h2>

        <span className="text-xs text-slate-400">
          Live System Flow
        </span>
      </div>

      {/* Flow */}
      <div className="relative z-10 mt-8 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <MessageCircle className="text-green-400" size={20} />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Workflow className="text-cyan-400" size={20} />
          </div>
        </div>

        {/* Center Node */}
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#0b1a2f] to-[#020817]">
          
          {/* Ring */}
          <div className="absolute h-48 w-48 rounded-full border border-cyan-400/10" />

          <div className="text-center">
            <div className="text-sm font-semibold text-white">
              BotBridge
            </div>
            <div className="text-xs text-slate-400">
              AI Engine
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Globe className="text-cyan-400" size={20} />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <MessageCircle className="text-blue-400" size={20} />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 mt-8 flex justify-between text-xs text-slate-400">
        <span>WhatsApp → AI Processing → Response</span>
        <span>Status: Active</span>
      </div>
    </div>
  );
}