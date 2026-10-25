import { Box, Typography } from "@mui/material";

import {
  FaWhatsapp,
  FaProjectDiagram,
  FaRobot,
  FaChartBar,
  FaLock,
  FaCloud,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      title: "Connect Anything",
      desc: "Integrate with 50+ platforms and channels including WhatsApp, Slack, Telegram, Web, and more.",
      icon: <FaWhatsapp />,
      bg: "#dcfce7",
      color: "#22c55e",
    },

    {
      title: "Visual Flow Builder",
      desc: "Build powerful conversation flows easily with our drag-and-drop workflow builder.",
      icon: <FaProjectDiagram />,
      bg: "#dbeafe",
      color: "#3b82f6",
    },

    {
      title: "AI-Powered Automation",
      desc: "Use smart AI to understand intent, automate responses, and handoff seamlessly.",
      icon: <FaRobot />,
      bg: "#ede9fe",
      color: "#8b5cf6",
    },

    {
      title: "Real-time Analytics",
      desc: "Track performance, user interactions, and bot health with real-time insights.",
      icon: <FaChartBar />,
      bg: "#f3e8ff",
      color: "#a855f7",
    },

    {
      title: "Secure & Compliant",
      desc: "Enterprise-grade security with end-to-end encryption and compliance standards.",
      icon: <FaLock />,
      bg: "#fef3c7",
      color: "#eab308",
    },

    {
      title: "Scalable & Reliable",
      desc: "Built to scale with high availability infrastructure and 99.99% uptime SLA.",
      icon: <FaCloud />,
      bg: "#f3e8ff",
      color: "#9333ea",
    },
  ];

  return (
    <Box
      sx={{
        background: "#f9fafb",
        py: 6,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* TOP CONTENT */}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          
        }}
      >
        {/* LABEL */}
        <Typography
          sx={{
            display: "inline-block",
            px: 2,
            py: 0.7,
            borderRadius: "999px",
            background: "#e0f2fe",
            color: "#0369a1",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1px",
            mb: 3,
            boxShadow:
                  "0 10px 30px rgba(99, 119, 151, 0.36)",
          }}
        >
          POWERFUL FEATURES
        </Typography>

        {/* HEADING */}
        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              md: "44px",
            },

            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827",
            textAlign: "center",
            maxWidth: "1000px",
          }}
        >
          Everything you need to
          <br />
          orchestrate{" "}

          <span
            style={{
              background:
                "linear-gradient(90deg, #22c55e, #3b82f6)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            conversations
          </span>
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 3,
            color: "#6b7280",
            fontSize: "18px",
            maxWidth: "800px",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          Bot Bridge helps you design, connect,
          and optimize AI bot experiences across every channel.
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 1fr",
          },

          gap: 3,

          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              background: "#ffffff",

              border: "1px solid #e5e7eb",

              borderRadius: "18px",

              p: 3,

              display: "flex",
              alignItems: "flex-start",
              gap: 2.5,

              minHeight: "160px",

              transition: "0.3s",
              boxShadow:
                  "0 10px 30px rgba(0,0,0,0.06)",

              "&:hover": {
                transform: "translateY(-5px)",

                boxShadow:
                  "0 10px 30px rgba(0, 0, 0, 0.36)",
              },
            }}
          >
            {/* ICON */}
            <Box
              sx={{
                width: 58,
                height: 58,
                minWidth: 58,

                borderRadius: "16px",

                background: feature.bg,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: feature.color,

                fontSize: "24px",
              }}
            >
              {feature.icon}
            </Box>

            {/* RIGHT CONTENT */}
            <Box>
              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  fontSize: "15px",
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}