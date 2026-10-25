import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/new_logo.png";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter a valid OTP");
      return;
    }

    try {
      setLoading(true);

      console.log({
        email,
        otp: otpValue,
      });

      // Verify OTP API

      navigate("/login");
    } catch (error) {
      setError("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    console.log("Resend OTP");

    // Resend OTP API
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
              Verify Email
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Enter the 6-digit OTP sent to
            </p>

            <p className="mt-2 font-medium text-cyan-400">
              {email}
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleVerify}
            className="space-y-6"
          >
            {/* OTP BOXES */}
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleOtpChange(
                      e.target.value,
                      index
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  className="h-14 w-14 rounded-xl border border-white/10 bg-white/5 text-center text-xl font-bold text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                />
              ))}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={loading}
              onClick={() =>
                navigate("/company-registration")
              }
              className="w-full rounded-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-3 font-semibold text-black shadow-[0_0_30px_rgba(0,255,200,0.25)] transition-all duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>

            {/* Resend OTP */}
            <button
              type="button"
              onClick={handleResendOtp}
              className="w-full text-sm text-cyan-400 transition hover:text-cyan-300"
            >
              Resend OTP
            </button>

            {/* Back */}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="w-full text-sm text-gray-500 hover:text-gray-300"
            >
              Back to Registration
            </button>
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
          <div className="mb-6">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
              Email Verification
            </span>
          </div>

          <h2 className="max-w-xl text-5xl font-bold leading-tight">
            One Step Away
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              From Your Workspace
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            Verify your email address to activate your
            BotBridge account and start automating
            WhatsApp conversations with AI-powered
            solutions.
          </p>

          <div className="mt-12 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-green-400">
                Secure Verification
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                OTP expires automatically after
                10 minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-cyan-400">
                Instant Access
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Verify once and access your
                workspace instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-blue-400">
                Enterprise Ready
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Built for teams, automation,
                customer support and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}