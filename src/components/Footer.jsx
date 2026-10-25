import { Box, Typography } from "@mui/material";
import botLogo from "../assets/new_logo.png";

import IconButton from "@mui/material/IconButton";
import {
  FaTwitter as FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";



export default function Footer() {

  return (
    <Box
      sx={{
        background: "#030712",
        color: "white",
        px: { xs: 3, md: 8 },
        // py: 8,
        pt: 8,
        pb: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr 1fr 1fr 1fr",
          },
          gap: 5,
        }}
      >
        {/* LEFT */}
        <Box>
          {/* LOGO */}
          <Box
            component="img"
            src={botLogo}
            alt="logo"
            sx={{
              width: 150,
              mb: 1.5,
            }}
          />
        
          {/* DESCRIPTION */}
          <Typography
            sx={{
              color: "#9ca3af",
              lineHeight: 1.7,
              fontSize: "14px",
              maxWidth: "260px",
              mb: 2,
            }}
          >
            The all-in-one platform to connect,
            integrate, and manage AI bots
            across channels and tools.
          </Typography>
        
          {/* SOCIAL ICONS */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {[
              { Icon: FaXTwitter, link: "#" },
              { Icon: FaLinkedinIn, link: "#" },
              { Icon: FaYoutube, link: "#" },
              { Icon: FaGithub, link: "#" },
              { Icon: FaInstagram, link: "https://www.instagram.com/botbridge_waba/" },
            ].map(
              ({ Icon, link }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 34,
                    height: 34,
                    background: "#111827",
                    color: "#d1d5db",
                    padding: 0,
                    transition: "0.3s",
        
                    "& svg": {
                      fontSize: "15px",
                    },
        
                    "&:hover": {
                      background: "#1f2937",
                      color: "white",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              )
            )}
          </Box>
        </Box>
        {/* FOOTER LINKS */}
        {[
          {
            title: "Product",
            items: [
              { label: "Features", link: "/features" },
              { label: "Integrations", link: "/integrations" },
              { label: "Pricing", link: "/pricing" }
            ],
          },
          {
            title: "Solutions",
            items: ["E-commerce", "Support Automation", "Lead Generation", "Internal Automation"],
          },
          {
            title: "Resources",
            items: [
              { label: "Blog", link: "/blogs" },
              { label: "Help Center", link: "/help-center" },
              { label: "Community", link: "/community" }
            ],
          },
          {
            title: "Company",
            items: [
              { label: "About Us", link: "/about" },
              { label: "Contact", link: "/contact" },
              { label: "Privacy Policy", link: "/privacy-policy" },
              { label: "Refund Policy", link: "/refund-policy" }
            ],
          },
        ].map((section, index) => (
          <Box key={index}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              {section.title}
            </Typography>

            {section.items.map((item, i) => (
              <Typography
                key={i}
                component="a"
                href={typeof item === 'string' ? '#' : item.link}
                sx={{
                  display: "block",
                  color: "#9ca3af",
                  mb: 1.5,
                  cursor: "pointer",
                  textDecoration: "none",

                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {typeof item === 'string' ? item : item.label}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>

      {/* COPYRIGHT */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#6b7280",
          mt: 8,
          borderTop: "1px solid #111827",
          pt: 3,
        }}
      >
        © 2026 Bot Bridge. All rights reserved.
      </Typography>
    </Box>
  );
}