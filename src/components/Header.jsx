import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import botLogo from "../assets/new_logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/features" },
    { title: "Integrations", path: "/integrations" },
    { title: "Pricing", path: "/pricing" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "#030712",
        borderBottom: "1px solid #111827",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px",
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src={botLogo}
            alt="Bot Logo"
            sx={{ width: { xs: 100, md: 180 }, height: "auto" }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.title}
              onClick={() => {
                if (item.path) {
                    navigate(item.path);
                } else if (item.id) {
                    scrollToSection(item.id);
                } else {
                    navigate("/");
                }
              }}
              sx={{
                color: item.title === "Home" ? "#22c55e" : "white",
                cursor: "pointer",
                "&:hover": { color: "#22c55e" },
              }}
            >
              {item.title}
            </Typography>
          ))}
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 2 }}>
          <Button 
            variant="contained" 
            onClick={() => navigate("/register")} 
            sx={{ 
              background: "linear-gradient(90deg, #22c55e, #3b82f6)", 
              borderRadius: "14px", 
              textTransform: "none",
              px: { lg: 2, xl: 4 },
              py: { lg: 0.5, xl: 0.7 },
              fontSize: { lg: "14px", xl: "16px" }
            }}
          >
            Register
          </Button>
          <Button 
            variant="contained" 
            onClick={() => navigate("/login")} 
            sx={{ 
              background: "linear-gradient(90deg, #22c55e, #3b82f6)", 
              borderRadius: "14px", 
              textTransform: "none",
              px: { lg: 2, xl: 4 },
              py: { lg: 0.5, xl: 0.7 },
              fontSize: { lg: "14px", xl: "16px" }
            }}
          >
            Log in
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          sx={{ display: { lg: "none" }, color: "white" }}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Accordion Menu */}
      <Collapse in={mobileMenuOpen}>
        <Box sx={{ background: "#030712", borderTop: "1px solid #111827", p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                key={item.title} 
                onClick={() => {
                  if (item.path) {
                      navigate(item.path);
                  } else if (item.id) {
                      scrollToSection(item.id);
                  } else {
                      navigate("/");
                  }
                  setMobileMenuOpen(false);
                }}
              >
                <ListItemText primary={item.title} sx={{ color: "white" }} />
              </ListItem>
            ))}
            <ListItem>
              <Button fullWidth variant="contained" onClick={() => navigate("/register")} sx={{ mb: 1, background: "linear-gradient(90deg, #22c55e, #3b82f6)" }}>Register</Button>
            </ListItem>
            <ListItem>
              <Button fullWidth variant="contained" onClick={() => navigate("/login")} sx={{ background: "linear-gradient(90deg, #22c55e, #3b82f6)" }}>Log in</Button>
            </ListItem>
          </List>
        </Box>
      </Collapse>
    </AppBar>
  );
}
