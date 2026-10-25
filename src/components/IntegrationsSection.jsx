import { Box, Typography } from "@mui/material";

import {
  FaWhatsapp,
  FaSlack,
  FaShopify,
  FaStripe,
  FaHubspot,
  FaSalesforce,
} from "react-icons/fa";

import { SiZapier, SiGoogleanalytics } from "react-icons/si";

export default function IntegrationsSection() {
  const integrations = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      color: "#22c55e",
    },
    {
      name: "Slack",
      icon: <FaSlack />,
      color: "#7c3aed",
    },
    {
      name: "Shopify",
      icon: <FaShopify />,
      color: "#16a34a",
    },
    {
      name: "Stripe",
      icon: <FaStripe />,
      color: "#635bff",
    },
    {
      name: "HubSpot",
      icon: <FaHubspot />,
      color: "#f97316",
    },
    {
      name: "Salesforce",
      icon: <FaSalesforce />,
      color: "#0ea5e9",
    },
    {
      name: "Zapier",
      icon: <SiZapier />,
      color: "#ff4f00",
    },
    {
      name: "Analytics",
      icon: <SiGoogleanalytics />,
      color: "#f59e0b",
    },
  ];

  return (
    <Box
      sx={{
        background: "#ffffff",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Heading */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            px: 2,
            py: 0.7,
            borderRadius: "999px",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "1px",
            mb: 3,
            boxShadow:
                  "0 10px 30px rgba(124, 151, 99, 0.36)",
          }}
        >
          100+ INTEGRATIONS
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              md: "52px",
            },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827",
            mb: 2,
          }}
        >
          Connect Every Tool
          <br />
        
          <span
            style={{
              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            In One Place
          </span>
        </Typography>
        
        <Typography
          sx={{
            color: "#6b7280",
            fontSize: "18px",
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Sync your favorite apps, CRMs, messaging
          channels, and business tools to create
          seamless workflows without writing code.
        </Typography>
      </Box>

      {/* Integration Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4,1fr)",
          },
          gap: 3,
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        {integrations.map((item, index) => (
          <Box
            key={index}
            sx={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              p: 4,

              textAlign: "center",

              transition: "all .3s ease",

              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: item.color,
                boxShadow:
                  "0 12px 30px rgba(0, 0, 0, 0.11)",
              },
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 70,
                mx: "auto",
                mb: 2,

                borderRadius: "18px",

                background: `${item.color}15`,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: item.color,
                fontSize: "34px",
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                color: "#111827",
                mb: 1,
              }}
            >
              {item.name}
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Easily connect and automate workflows.
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}