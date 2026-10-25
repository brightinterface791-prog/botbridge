import { CheckCircle2, Circle } from "lucide-react";

export default function StepIndicator({ connected }) {
  const steps = [
    "Login with Meta",
    "Select Business",
    "Verify Phone",
    "Complete Setup",
  ];

  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-3"
        >
          {connected ? (
            <CheckCircle2
              size={18}
              className="text-green-500"
            />
          ) : (
            <Circle
              size={18}
              className="text-cyan-400"
            />
          )}

          <span className="text-sm text-slate-300">
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}