import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/new_logo.png";

export default function Companyregister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company_name: "",
    industry: "",
    company_size: "",
    website: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const industries = [
    "E-commerce",
    "Education",
    "Healthcare",
    "Real Estate",
    "Travel & Hospitality",
    "Finance",
    "Recruitment",
    "Automobile",
    "Logistics",
    "IT Services",
    "Manufacturing",
    "Other",
  ];

  const companySizes = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201-500 Employees",
    "500+ Employees",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      formData.password !== formData.confirm_password
    ) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      console.log(formData);

      navigate("/verify-otp", {
        state: {
          email: formData.email,
        },
      });
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#031b16] to-[#041a2f]" />

          <div className="absolute left-[-100px] top-[-100px] h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

          <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-center px-16 text-white">
            <img
              src={logo}
              alt="BotBridge"
              className="mb-10 h-16 w-fit"
            />

            <h1 className="text-5xl font-bold leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Workspace
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-300">
              Automate WhatsApp conversations,
              deploy AI chatbots and grow your
              business with BotBridge.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                ✓ WhatsApp Automation
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                ✓ AI Chatbots
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                ✓ Team Collaboration
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                ✓ Analytics & Insights
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Start your free BotBridge account
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleRegister}
              className="space-y-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />

                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                >
                  <option value="">
                    Select Industry
                  </option>

                  {industries.map((industry) => (
                    <option
                      key={industry}
                      value={industry}
                    >
                      {industry}
                    </option>
                  ))}
                </select>

                <select
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                >
                  <option value="">
                    Company Size
                  </option>

                  {companySizes.map((size) => (
                    <option
                      key={size}
                      value={size}
                    >
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                name="website"
                placeholder="Website (Optional)"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />

                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  required
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                <span>
                  I agree to the Terms of Service
                  and Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 py-3 font-semibold text-black"
              >
                {loading
                  ? "Creating Account..."
                  : "Create Free Account"}
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-medium text-cyan-600"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}