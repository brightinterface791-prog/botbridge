import { Box, Typography, Button } from "@mui/material";
import botLogo from "../assets/logo.png";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function CTASection() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        background: "#ffffff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          borderRadius: "24px",
          background:
            "linear-gradient(90deg,#22c55e,#2563eb)",

          p: { xs: 3, md: 4 },

          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          alignItems: "center",
          justifyContent: "space-between",

          gap: 4,
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* LOGO BOX */}
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "20px",
              background: "white",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={botLogo}
              alt="logo"
              sx={{
                width: "80%",
              }}
            />
          </Box>

          {/* TEXT */}
          <Box>
            <Typography
              sx={{
                color: "white",

                fontSize: {
                  xs: "26px",
                  md: "34px",
                },

                fontWeight: 700,
                mb: 1,
              }}
            >
              Ready to build stronger connections?
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "16px",
                maxWidth: "500px",
                lineHeight: 1.7,
              }}
            >
              Join thousands of teams using Bot Bridge
              to power conversations that matter.
            </Typography>
          </Box>
        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "nowrap",
          }}
        >
          {/* GET STARTED BUTTON */}
          <Button
            variant="contained"
            sx={{
              height: "52px",
              minWidth: "190px",

              background: "white",
              color: "#111827",

              px: 3,
              borderRadius: "12px",

              textTransform: "none",
              fontWeight: 700,
              fontSize: "15px",

              whiteSpace: "nowrap",

              boxShadow: "none",

              "&:hover": {
                background: "#f3f4f6",
                boxShadow: "none",
              },
            }}
          >
            Get Started Free →
          </Button>

          {/* BOOK DEMO BUTTON */}
          <Button
            variant="outlined"
            startIcon={<CalendarTodayIcon />}
            sx={{
              height: "52px",
              minWidth: "170px",

              border:
                "1px solid rgba(255,255,255,0.4)",

              color: "white",

              px: 3,
              borderRadius: "12px",

              textTransform: "none",
              fontWeight: 600,
              fontSize: "15px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              whiteSpace: "nowrap",

              "& .MuiButton-startIcon": {
                marginRight: "8px",
              },

              "& .MuiSvgIcon-root": {
                fontSize: "16px",
              },

              "&:hover": {
                borderColor: "white",
                background:
                  "rgba(255,255,255,0.05)",
              },
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}