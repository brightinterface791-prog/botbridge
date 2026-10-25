import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VideocamIcon from "@mui/icons-material/Videocam";
import HubIcon from "@mui/icons-material/Hub";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApiIcon from "@mui/icons-material/Api";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// All original node types, labels, groups and ordering are preserved.
const sections = [
  {
    title: "Messaging",
    items: [
      { type: "message", label: "Message", icon: <ChatOutlinedIcon />, color: "#36D1F4" },
      { type: "button", label: "Buttons", icon: <SmartButtonIcon />, color: "#818CF8" },
      { type: "list", label: "List Message", icon: <ListAltIcon />, color: "#818CF8" },
      { type: "image", label: "Image", icon: <ImageIcon />, color: "#38BDF8" },
      { type: "pdf", label: "PDF", icon: <PictureAsPdfIcon />, color: "#818CF8" },
      { type: "video", label: "Video", icon: <VideocamIcon />, color: "#A78BFA" },
    ],
  },
  {
    title: "Logic",
    items: [
      { type: "condition", label: "Condition", icon: <HubIcon />, color: "#E995EF" },
      { type: "delay", label: "Delay", icon: <AccessTimeIcon />, color: "#A7C7ED" },
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      { type: "ai", label: "AI Assistant", icon: <PsychologyIcon />, color: "#D58AF5" },
    ],
  },
  {
    title: "Actions",
    items: [
      { type: "api", label: "API Request", icon: <ApiIcon />, color: "#A7C7ED" },
      { type: "human", label: "Human Agent", icon: <PersonIcon />, color: "#4ADE80" },
      { type: "database", label: "Database", icon: <StorageIcon />, color: "#A7C7ED" },
    ],
  },
];

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [draggingType, setDraggingType] = useState(null);
  const searchTerm = search.trim().toLowerCase();
  const visibleSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        `${section.title} ${item.label} ${item.type}`
          .toLowerCase()
          .includes(searchTerm)
      ),
    }))
    .filter((section) => section.items.length > 0);

  const onDragStart = (event, nodeType) => {
    // Preserve the exact payload expected by the existing React Flow canvas.
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
    setDraggingType(nodeType);
  };

  return (
    <Box
      component="aside"
      aria-label="Workflow components"
      sx={{
        width: 260,
        minWidth: 260,
        flexShrink: 0,
        height: "100%",
        minHeight: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        bgcolor: "#071824",
        backgroundImage:
          "linear-gradient(160deg, rgba(11,31,45,.7), rgba(5,20,31,.35))",
        color: "#F1F5FF",
        border: "1px solid #20384B",
        borderRadius: "12px",
      }}
    >
      <Box sx={{ px: 1.75, pt: 2, pb: 1.25, flexShrink: 0 }}>
        <Typography
          component="h2"
          sx={{ m: 0, mb: 1.75, fontWeight: 700, fontSize: 18, lineHeight: 1.3 }}
        >
          Components
        </Typography>

        <OutlinedInput
          fullWidth
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSearch("");
          }}
          placeholder="Search components"
          inputProps={{ "aria-label": "Search workflow components" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchRoundedIcon sx={{ fontSize: 20, color: "#A7BFDA" }} />
            </InputAdornment>
          }
          endAdornment={
            search ? (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                  edge="end"
                  sx={{ color: "#A7BFDA" }}
                >
                  <CloseRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </InputAdornment>
            ) : null
          }
          sx={{
            height: 40,
            borderRadius: "9px",
            bgcolor: "#0E1E2D",
            color: "#E6EDF9",
            fontSize: 12,
            "& input": { py: 1.1, minWidth: 0 },
            "& input::placeholder": { color: "#8B9DB5", opacity: 1 },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#2D465D" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#49627A" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#00C9ED",
              borderWidth: 1,
            },
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          px: 1.75,
          pb: 1.75,
          scrollbarWidth: "thin",
          scrollbarColor: "#294359 transparent",
          "&::-webkit-scrollbar": { width: 5 },
          "&::-webkit-scrollbar-thumb": { bgcolor: "#294359", borderRadius: 8 },
          "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
        }}
      >
        {visibleSections.map((section, index) => (
          <Box key={section.title} sx={{ mt: index === 0 ? 1 : 2.5 }}>
            <Typography
              component="h3"
              sx={{
                m: 0,
                mb: 1,
                fontSize: 10,
                fontWeight: 500,
                lineHeight: 1.5,
                letterSpacing: 0.65,
                color: "#B3C3D9",
                textTransform: "uppercase",
              }}
            >
              {section.title}
            </Typography>

            <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
              {section.items.map((item) => (
                <ListItemButton
                  key={item.type}
                  draggable
                  onDragStart={(event) => onDragStart(event, item.type)}
                  onDragEnd={() => setDraggingType(null)}
                  title={`Drag ${item.label} onto the canvas`}
                  aria-label={`Drag ${item.label} onto the canvas`}
                  disableRipple
                  sx={{
                    minHeight: 42,
                    px: 1.25,
                    py: 0.8,
                    borderRadius: "9px",
                    border: "1px solid #2A4054",
                    bgcolor: "#0E1D2B",
                    backgroundImage:
                      "linear-gradient(110deg, rgba(21,40,56,.4), rgba(11,24,37,.15))",
                    color: "#F1F5FC",
                    cursor: "grab",
                    userSelect: "none",
                    opacity: draggingType === item.type ? 0.55 : 1,
                    transition: "background-color .18s ease, border-color .18s ease, opacity .18s ease",
                    "& .MuiListItemIcon-root": {
                      minWidth: 36,
                      color: item.color,
                      "& svg": { fontSize: 22 },
                    },
                    "&:hover": {
                      bgcolor: "#142B3D",
                      borderColor: "#3E7086",
                      "& .drag-handle": { color: "#5EDDF6" },
                    },
                    "&.Mui-focusVisible": {
                      outline: "2px solid #00C9ED",
                      outlineOffset: -2,
                    },
                    "&:active": {
                      cursor: "grabbing",
                      borderColor: "#00C9ED",
                      bgcolor: "#103044",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{ my: 0, minWidth: 0 }}
                    slotProps={{
                      primary: { sx: { fontSize: 12, fontWeight: 500, lineHeight: 1.4 } },
                    }}
                  />
                  <DragIndicatorRoundedIcon
                    className="drag-handle"
                    aria-hidden="true"
                    sx={{ ml: 1, flexShrink: 0, fontSize: 18, color: "#89A5C7", transition: "color .18s ease" }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        ))}
        {visibleSections.length === 0 && (
          <Typography role="status" sx={{ px: 1, py: 4, textAlign: "center", color: "#94A3B8", fontSize: 12 }}>
            No components found. Try another search.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
