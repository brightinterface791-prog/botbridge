import { CheckCircle2 } from "lucide-react";

export default function SuccessCard() {
  return (
    <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-center">

      <CheckCircle2
        size={48}
        className="mx-auto mb-4 text-green-500"
      />

      <h3 className="text-lg font-semibold text-green-400">
        WhatsApp Connected
      </h3>

      <p className="mt-2 text-sm text-slate-300">
        Your WhatsApp Business Account has been
        successfully connected to BotBridge.
      </p>

    </div>
  );
}