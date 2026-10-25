import { Box, Typography } from "@mui/material";

import {
  FaBullhorn,
  FaChartLine,
  FaHeadset,
  FaShoppingCart,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Marketing",
      desc: "Launch targeted campaigns, nurture leads, and increase customer engagement through automation.",
      icon: <FaBullhorn />,
      bg: "#dcfce7",
      color: "#22c55e",
    },

    {
      title: "Sales",
      desc: "Capture leads instantly and automate follow-ups to improve conversion rates.",
      icon: <FaChartLine />,
      bg: "#dbeafe",
      color: "#3b82f6",
    },

    {
      title: "Customer Support",
      desc: "Deliver 24/7 assistance with AI-powered chatbots and live support workflows.",
      icon: <FaHeadset />,
      bg: "#ede9fe",
      color: "#8b5cf6",
    },

    {
      title: "E-Commerce",
      desc: "Manage orders, product inquiries, and customer interactions across channels.",
      icon: <FaShoppingCart />,
      bg: "#fef3c7",
      color: "#eab308",
    },

    {
      title: "Education",
      desc: "Handle admissions, student support, notifications, and learning assistance.",
      icon: <FaGraduationCap />,
      bg: "#fce7f3",
      color: "#ec4899",
    },

    {
      title: "Healthcare",
      desc: "Automate appointment booking, patient reminders, and healthcare communication.",
      icon: <FaHeartbeat />,
      bg: "#fee2e2",
      color: "#ef4444",
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
          mb: 5,
        }}
      >
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
          INDUSTRY SOLUTIONS
        </Typography>
            
        <Typography
        sx={{
          fontSize: {
            xs: "38px",
            md: "48px",
          },
          fontWeight: 800,
          lineHeight: 1.1,
          color: "#111827",
        }}
      >
        Solutions Tailored For
        <br />
      
        <span
          style={{
            background:
              "linear-gradient(90deg,#22c55e,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Every Industry
        </span>
      </Typography>
      
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
          Tailored solutions designed for marketing,
          sales, education, healthcare, and customer
          support teams to accelerate growth and
          improve engagement.
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 2.5,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {solutions.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
      
              background: "#ffffff",
      
              border: "1px solid #e5e7eb",
      
              borderRadius: "18px",
      
              p: 3,
      
              overflow: "hidden",
      
              transition: "all .3s ease",
              boxShadow:
                  "0 12px 25px rgba(0,0,0,0.08)",
      
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 12px 25px rgba(0, 0, 0, 0.26)",
              },
      
              "&:hover .top-line": {
                width: "100%",
              },
            }}
          >
            {/* Top Gradient Line */}
            <Box
              className="top-line"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
      
                width: "0%",
      
                height: "4px",
      
                background:
                  "linear-gradient(90deg,#22c55e,#3b82f6)",
                transition: "0.4s ease",
              }}
            />
      
            {/* Icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
      
                borderRadius: "16px",
      
                background: item.bg,
      
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
      
                color: item.color,
      
                fontSize: "22px",
      
                mb: 2,
              }}
            >
              {item.icon}
            </Box>
      
            {/* Badge */}
            <Typography
              sx={{
                display: "inline-block",
      
                px: 1.2,
                py: 0.4,
      
                borderRadius: "999px",
      
                background: item.bg,
      
                color: item.color,
      
                fontSize: "10px",
      
                fontWeight: 700,
      
                letterSpacing: "0.5px",
      
                mb: 1.5,
              }}
            >
              INDUSTRY USE CASE
            </Typography>
      
            {/* Title */}
            <Typography
              sx={{
                fontSize: "20px",
      
                fontWeight: 700,
      
                color: "#111827",
      
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
      
            {/* Description */}
            <Typography
              sx={{
                color: "#6b7280",
      
                lineHeight: 1.6,
      
                fontSize: "14px",
      
                mb: 2,
              }}
            >
              {item.desc}
            </Typography>
      
            {/* Learn More */}
            <Typography
              sx={{
                color: item.color,
      
                fontWeight: 700,
      
                fontSize: "14px",
      
                cursor: "pointer",
      
                display: "inline-flex",
      
                alignItems: "center",
      
                transition: "0.3s",
      
                "&:hover": {
                  transform: "translateX(4px)",
                },
              }}
            >
              Learn More →
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}