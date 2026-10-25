import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/new_logo.png";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      console.log({
        name,
        email,
        password,
      });

      // API Call Here

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* LEFT SIDE */}
      <div className="flex w-full items-center justify-center bg-black px-6 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="BotBridge"
              className="h-16 object-contain"
            />
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Start your journey with BotBridge
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              onClick={() =>
                navigate("/verify-otp", {
                  state: {
                    email: email,
                  },
                })
              }
              className="rounded-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-3 font-semibold text-black shadow-[0_0_30px_rgba(0,255,200,0.25)] transition-all duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="h-px flex-1 bg-white/10"></div>
              BOTBRIDGE
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            {/* Login */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden w-1/2 overflow-hidden lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#031b16] to-[#041a2f]" />

        <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-green-500/20 blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <h2 className="max-w-xl text-5xl font-bold leading-tight">
            Join the
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              BotBridge Network
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            Create your account and start building AI-powered
            WhatsApp automation, chatbots, and customer engagement
            workflows in minutes.
          </p>

          <div className="mt-12 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-green-400">
                Quick Setup
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Create your workspace and start instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-cyan-400">
                AI Automation
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Automate support, sales, and customer engagement.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-blue-400">
                Scale Faster
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Grow conversations with WhatsApp Business APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}