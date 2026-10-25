import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    // <Fab
    //   onClick={scrollToTop}
    //   sx={{
    //     position: "fixed",
    //     bottom: 30,
    //     right: 30,
    //     zIndex: 9999,
    //   }}
    // >
    //   <KeyboardArrowUpIcon />
    // </Fab>
    <Fab
  onClick={scrollToTop}
  sx={{
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 9999,

    background: "#171819",
    color: "#ffffff",

    border: "1px solid #1f2937",

    "&:hover": {
      background: "#1d232f",
    },
  }}
>
  <KeyboardArrowUpIcon />
</Fab>
  );
}