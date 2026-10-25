import { Smartphone } from "lucide-react";

export default function MetaConnectButton({
  loading,
  onConnect,
}) {
  return (
    <button
      onClick={onConnect}
      disabled={loading}
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
    >
      <Smartphone size={22} />

      {loading
        ? "Opening Meta..."
        : "Connect with Meta"}
    </button>
  );
}