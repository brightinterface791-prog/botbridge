import { Box, Typography, Card, CardContent } from "@mui/material";

const resourcesData = [
  {
    title: "Documentation",
    desc: "Complete guides and API references for developers.",
  },
  {
    title: "Tutorials",
    desc: "Step-by-step learning materials for beginners.",
  },
  {
    title: "Case Studies",
    desc: "Real-world examples of project implementation.",
  },
  {
    title: "Support",
    desc: "Get help from our technical support team anytime.",
  },
];

export default function ResourcesSection() {
  return (
    <Box
      sx={{
        background: "#f2f4f6",
        py: 8,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
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
                  "0 10px 30px rgba(103, 151, 99, 0.36)",
          }}
        >
          RESOURCES
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "38px", md: "48px" },
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#111827",
          }}
        >
          Learn & Build with
          <br />

          <span
            style={{
              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            powerful resources
          </span>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "#6b7280",
            fontSize: "18px",
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Everything you need to learn, build, and grow faster with our platform.
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(4,1fr)",
          },
          gap: 4,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {resourcesData.map((item, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "24px",
              p: 2,
              border: "1px solid #e5e7eb",
              transition: "0.35s",
              cursor: "pointer",

              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 20px 40px rgba(34,197,94,0.18)",

                border: "1px solid transparent",
                background:
                  "linear-gradient(135deg,#22c55e,#3b82f6)",
                color: "#fff",
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  color: "inherit",
                  opacity: 0.85,
                }}
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}