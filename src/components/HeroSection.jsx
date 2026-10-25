import { Box, Typography, Button } from "@mui/material";
import dashboardImg from "../assets/bg-1.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        background: "#030712",

        color: "white",

        px: {
          xs: 3,
          md: 5,
        },

        py: 8,

        display: "flex",

        flexDirection: {
          xs: "column",
          md: "row",
        },

        alignItems: "center",

        justifyContent: "space-between",

        gap: {
          xs: 8,
          md: 4,
        },

        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },

          display: "flex",

          flexDirection: "column",

          justifyContent: "center",
        }}
      >
        {/* TOP PILL */}
        <Box
          sx={{
            display: "inline-flex",

            alignItems: "center",

            gap: 1.5,

            width: "fit-content",

            px: 2,
            py: 0.5,

            mb: 3,

            borderRadius: "999px",

            border:
              "1px solid rgba(255,255,255,0.12)",

            background: "rgba(255,255,255,0.03)",

            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                md: "14px",
              },

              fontWeight: 700,

              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            AI-powered
          </Typography>

          <Typography
            sx={{
              color: "#4b5563",
            }}
          >
            ✦
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                md: "14px",
              },

              fontWeight: 700,

              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            Seamless
          </Typography>

          <Typography
            sx={{
              color: "#4b5563",
            }}
          >
            ✦
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                md: "14px",
              },

              fontWeight: 700,

              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            Intelligent
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontSize: {
              xs: "42px",
              sm: "56px",
              md: "72px",
            },

            fontWeight: 800,

            lineHeight: 1.1,

            letterSpacing: "-2px",
          }}
        >
          Connect Bots.
          <br />
          Build{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",
            }}
          >
            Bridges.
          </Box>
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 3,

            color: "#9ca3af",

            maxWidth: "550px",

            fontSize: {
              xs: "16px",
              md: "18px",
            },

            lineHeight: 1.8,
          }}
        >
          Bot Bridge helps you connect,
          integrate, and manage AI bots across
          channels and tools — all in one place.
        </Typography>

        {/* BUTTONS */}
        <Box
          sx={{
            mt: 4,

            display: "flex",

            gap: 3,

            flexWrap: "wrap",
          }}
        >
          {/* GET STARTED */}
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",

              px: 4,

              py: 1.5,

              borderRadius: "14px",

              textTransform: "none",

              fontWeight: 700,

              fontSize: "15px",

              boxShadow:
                "0 10px 30px rgba(34,197,94,0.25)",

              "&:hover": {
                background:
                  "linear-gradient(90deg,#16a34a,#2563eb)",
              },
            }}
          >
            Get Started Free
          </Button>

          {/* WATCH DEMO */}
          <Button
            variant="outlined"
            startIcon={
              <Box
                sx={{
                  width: 28,
                  height: 28,

                  borderRadius: "50%",

                  background: "white",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                <PlayArrowIcon
                  sx={{
                    fontSize: 18,
                    color: "#030712",
                  }}
                />
              </Box>
            }
            sx={{
              borderColor: "#374151",

              color: "white",

              px: 4,

              py: 1.5,

              borderRadius: "14px",

              textTransform: "none",

              fontWeight: 600,

              fontSize: "15px",

              gap: 1,

              "&:hover": {
                borderColor: "#22c55e",

                background:
                  "rgba(255,255,255,0.03)",
              },
            }}
          >
            Watch Demo
          </Button>
        </Box>

        {/* TAG BUTTONS */}
        <Box
          sx={{
            mt: 4,

            display: "flex",

            flexWrap: "wrap",

            gap: 2,
          }}
        >
          {[
            "No Code Setup",
            "Secure & Reliable",
            "Scale Instantly",
          ].map((item) => (
            <Box
              key={item}
              sx={{
                p: "1px",

                borderRadius: "999px",

                background:
                  "linear-gradient(90deg,#22c55e,#3b82f6)",
              }}
            >
              <Button
                startIcon={
                  <Box
                    sx={{
                      width: 10,
                      height: 10,

                      borderRadius: "50%",

                      background:
                        "linear-gradient(90deg,#22c55e,#3b82f6)",

                      boxShadow:
                        "0 0 10px rgba(34,197,94,0.6)",
                    }}
                  />
                }
                sx={{
                  background: "#030712",

                  color: "white",

                  borderRadius: "999px",

                  px: 2.5,

                  py: 0.8,

                  fontSize: "13px",

                  fontWeight: 600,

                  textTransform: "none",

                  minWidth: "auto",

                  border:
                    "1px solid rgba(255,255,255,0.04)",

                  "&:hover": {
                    background: "#111827",
                  },

                  "& .MuiButton-startIcon": {
                    mr: 1,
                  },
                }}
              >
                {item}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          position: "relative",
        }}
      >
        {/* GRADIENT BORDER */}
        <Box
          sx={{
            p: "2px",

            borderRadius: "28px",

            background:
              "linear-gradient(135deg, #22c55e, #3b82f6)",

            boxShadow: `
              0 0 40px rgba(34,197,94,0.15),
              0 0 80px rgba(59,130,246,0.10)
            `,
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={dashboardImg}
            alt="Dashboard"
            sx={{
              width: "100%",

              maxWidth: "650px",

              display: "block",

              borderRadius: "26px",

              background: "#030712",

              boxShadow:
                "0 25px 60px rgba(0,0,0,0.55)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}