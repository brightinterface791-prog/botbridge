import { useState } from "react";
import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

export default function PricingSection() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      description: "For catalogues and small shops",
      monthlyPrice: "₹499",
      annualPrice: "₹5,988",
      featured: false,
      features: [
        "1 WhatsApp number · 1 website",
        "1 staff seat, including owner",
        "1 chatbot · 1 workflow",
        "500 automation actions / month",
        "500 manual inbox sends / month",
        "100 retained leads · 7-day history",
        "2 external resource connections",
        "Menus, buttons and PDF delivery",
        "Google Drive + website widget",
        "Single-user inbox",
        "Email support · 2 business days"
      ]
    },
    {
      name: "Starter",
      description: "For small teams and follow-ups",
      monthlyPrice: "₹999",
      annualPrice: "₹11,988",
      featured: false,
      features: [
        "1 WhatsApp number · 1 website",
        "3 staff seats, including owner",
        "3 chatbots · 5 workflows",
        "2,500 automation actions / month",
        "1,500 manual inbox sends / month",
        "1,000 leads · 30-day history",
        "4 external resource connections",
        "Google Drive + Google Sheets",
        "WordPress form connector",
        "Shared inbox + scheduled campaigns",
        "Email support · 1 business day"
      ]
    },
    {
      name: "Growth",
      description: "For schools and connected stores",
      monthlyPrice: "₹1,999",
      annualPrice: "₹23,988",
      featured: true,
      features: [
        "1 WhatsApp number · 3 websites",
        "5 staff seats, including owner",
        "10 chatbots · 15 workflows",
        "7,500 automation actions / month",
        "3,000 manual inbox sends / month",
        "3,000 leads · 30-day history",
        "8 external resource connections",
        "Shopify + WooCommerce connectors",
        "Custom API + webhook access",
        "AI with your own provider account",
        "Priority support · 1 business day"
      ]
    },
    {
      name: "Business",
      description: "For larger teams and more volume",
      monthlyPrice: "₹3,999",
      annualPrice: "₹47,988",
      featured: false,
      features: [
        "2 WhatsApp numbers · 5 websites",
        "10 staff seats, including owner",
        "25 chatbots · 40 workflows",
        "20,000 automation actions / month",
        "5,000 manual inbox sends / month",
        "10,000 leads · 90-day history",
        "15 external resource connections",
        "All Growth integrations + AI access",
        "Automatic assignment + team reports",
        "30-minute troubleshooting call / month",
        "Priority support · 4 business hours"
      ]
    }
  ];

  return (
    <Box
      sx={{
        background: "#f9fafb",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: "38px", md: "48px" },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827", // Heading text color
            mb: 2,
          }}
        >
          Simple plans. Room to{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#22c55e,#3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            grow.
          </span>
        </Typography>
        <Typography sx={{ color: "#6b7280", fontSize: "18px", mb: 4 }}>
          Try Bot Bridge free for 7 days. Choose the plan that fits your business.
        </Typography>

        {/* Toggle */}
        <ToggleButtonGroup
          value={billingCycle}
          exclusive
          onChange={(e, newCycle) => newCycle && setBillingCycle(newCycle)}
          sx={{
            background: "#fff",
            borderRadius: "999px",
            p: 0.5,
            border: "1px solid #e5e7eb",
          }}
        >
          <ToggleButton value="monthly" sx={{ borderRadius: "999px", px: 4, textTransform: "none" }}>Monthly pricing</ToggleButton>
          <ToggleButton value="annual" sx={{ borderRadius: "999px", px: 4, textTransform: "none" }}>Annual: full 12 months</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Pricing Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: 3,
          maxWidth: "1500px",
          mx: "auto",
        }}
      >
        {plans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              background: plan.featured
                ? "linear-gradient(135deg,#22c55e,#3b82f6)"
                : "#fff",
              color: plan.featured ? "#fff" : "#111827",
              borderRadius: "24px",
              p: 3,
              border: plan.featured ? "none" : "1px solid #e5e7eb",
              transition: "0.35s",
              boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
            }}
          >
            {plan.featured && (
              <Typography
                sx={{
                  position: "absolute",
                  top: -14,
                  right: 25,
                  background: "#111827",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                RECOMMENDED
              </Typography>
            )}

            <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>{plan.name}</Typography>
            <Typography sx={{ color: plan.featured ? "rgba(255,255,255,.9)" : "#6b7280", mb: 3, fontSize: "14px", minHeight: 40 }}>{plan.description}</Typography>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontSize: "32px", fontWeight: 800 }}>
                {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {billingCycle === "monthly" ? "per month, billed monthly" : "billed every 12 months"}
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              {plan.features.map((feature, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                  <CheckCircleIcon sx={{ fontSize: 16, mt: "2px" }} />
                  <Typography sx={{ fontSize: "12px" }}>{feature}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.onload = () => {
                  const options = {
                    key: "YOUR_RAZORPAY_KEY_ID", // TODO: Replace with real key from .env
                    amount: billingCycle === "monthly" ? parseInt(plan.monthlyPrice.replace("₹", "")) * 100 : parseInt(plan.annualPrice.replace("₹", "")) * 100,
                    currency: "INR",
                    name: "Bot Bridge",
                    description: plan.name + " Plan",
                    handler: function (response) {
                      alert("Payment successful: " + response.razorpay_payment_id);
                      // TODO: Call billingApi.verify here
                    },
                    prefill: {
                      name: "Customer Name",
                      email: "customer@example.com",
                    },
                  };
                  const rzp = new window.Razorpay(options);
                  rzp.open();
                };
                document.body.appendChild(script);
              }}
              sx={{
                background: plan.featured ? "#fff" : "linear-gradient(90deg,#22c55e,#3b82f6)",
                color: plan.featured ? "#16a34a" : "#fff",
                borderRadius: "14px",
                py: 1,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Start 7-day free trial
            </Button>
          </Box>
        ))}
      </Box>

      {/* Footer Note */}
      <Typography sx={{ textAlign: "center", mt: 5, color: "#6b7280", fontSize: "14px" }}>
        Every plan includes secure client access, consent controls, delivery tracking and data export.
      </Typography>
      <Box sx={{ textAlign: "center", mt: 3, fontSize: "12px", color: "#6b7280" }}>
        NEED MORE? Extra seat ₹199/mo · Website ₹299/mo · 1,000 actions ₹199 · Assisted setup from ₹1,499
      </Box>
    </Box>
  );
}
