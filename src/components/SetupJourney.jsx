import {
  CheckCircle2,
  Circle,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

import WhatsAppConnectionModal from "./modals/WhatsAppConnectionModal";

const steps = [
  "Connect WhatsApp",
  "Create AI Agent",
  "Train Knowledge Base",
  "Deploy Workflow",
  "Invite Team",
  "Go Live",
];

export default function SetupJourney() {
  const [openWhatsApp, setOpenWhatsApp] =
    useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState([]);

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h3 className="mb-4 text-sm font-semibold text-slate-200">
          Setup Journey
        </h3>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => {
                if (step === "Connect WhatsApp") {
                  setOpenWhatsApp(true);
                }
              }}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 p-3 transition hover:bg-white/[0.03]"
            >
              <div className="flex items-center gap-2">
                {step === "Connect WhatsApp" && connectedAccounts.length > 0 ? (
                  <CheckCircle2
                    size={16}
                    className="text-green-400"
                  />
                ) : (
                  <Circle
                    size={16}
                    className="text-slate-500"
                  />
                )}

                <span className="text-xs text-slate-300">
                  {step}
                </span>
              </div>

              <ChevronRight
                size={14}
                className="text-slate-500"
              />
            </div>
          ))}
        </div>
      </div>

      <WhatsAppConnectionModal
        open={openWhatsApp}
        onClose={() => setOpenWhatsApp(false)}
        connectedAccounts={connectedAccounts}
        onConnectSuccess={(account) => {
          setConnectedAccounts([...connectedAccounts, account]);
        }}
      />
    </>
  );
}
