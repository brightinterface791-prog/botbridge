import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BroadcastWelcomeCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Broadcast Campaigns
          </h1>

          <p className="mt-2 text-violet-100">
            Send WhatsApp, Email and SMS campaigns to your customers from one place.
          </p>
        </div>

        <button
          onClick={() => navigate("/broadcast/create")}
          className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-violet-700 transition hover:scale-105"
        >
          <Plus size={18} />
          Create Broadcast
        </button>
      </div>
    </div>
  );
}