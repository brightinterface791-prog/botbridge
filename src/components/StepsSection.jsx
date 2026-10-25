import React from "react";
import { Box, Typography } from "@mui/material";

import {
  FaPlug,
  FaProjectDiagram,
  FaRocket,
} from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      desc: "Connect your favorite channels, apps, and data sources.",
      icon: <FaPlug />,
      color: "#22c55e",
      bg: "#dcfce7",
    },
    {
      number: "02",
      title: "Build",
      desc: "Design and automate conversations using our visual builder.",
      icon: <FaProjectDiagram />,
      color: "#3b82f6",
      bg: "#dbeafe",
    },
    {
      number: "03",
      title: "Launch",
      desc: "Go live, monitor performance, and optimize as you grow.",
      icon: <FaRocket />,
      color: "#9333ea",
      bg: "#f3e8ff",
    },
  ];

  return (
    <Box
      sx={{
        background: "#ffffff",
        // py: 12, padding
        pt: 6,
        pb: 6,

        px: { xs: 3, md: 8 },
      }}
    >
      {/* TOP CONTENT */}
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
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
          HOW IT WORKS
        </Typography>

        {/* HEADING */}
        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              md: "30px",
            },
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Get started in 3{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #22c55e, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            simple steps
          </span>
        </Typography>
      </Box>

      {/* STEPS */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
          gap: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {steps.map((step, index) => (
            <React.Fragment key={index}>
            {/* CARD */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "290px",
                },
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "24px",
                p: 2,
                minHeight: "165px",
                textAlign: "center",
                position: "relative",
                transition: "0.2s",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.06)",
      
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.16)",
                },
              }}
            >
              {/* NUMBER */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: step.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "13px",
                }}
              >
                {step.number}
              </Box>
      
              {/* ICON */}
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "18px",
                  background: step.bg,
                  color: step.color,
                  fontSize: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // margin: "30px auto 20px",
                  margin: "14px auto 10px",
                }}
              >
                {step.icon}
              </Box>
      
              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#111827",
                  mb: 2,
                }}
              >
                {step.title}
              </Typography>
      
              {/* DESC */}
              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "15px",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </Typography>
            </Box>
      
            {/* ARROW */}
            {index !== steps.length - 1 && (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  width: "55px",
                  marginLeft: "-8px",
                  marginRight: "-8px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    color: "#d1d5db",
                    fontWeight: 200,
                    lineHeight: 1,
                  }}
                >
                  →
                </Typography>
              </Box>
            )}
            </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}