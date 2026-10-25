export default function WelcomeCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-8">
      <h2 className="text-3xl font-bold">
        Welcome to BotBridge 🚀
      </h2>
      {/* <p>
        <strong>Token:</strong> {token}
      </p> */}
      <p className="mt-2 text-slate-400">
        Complete onboarding and launch your first AI assistant.
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span>Setup Progress</span>
          <span>25%</span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-1/4 rounded-full bg-gradient-to-r from-cyan-400 to-green-400" />
        </div>
      </div>
    </div>
  );
}