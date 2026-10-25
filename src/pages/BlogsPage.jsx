import { Container, Typography, Box } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function BlogsPage() {
  return (
    <MainLayout>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: "linear-gradient(90deg,#22c55e,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 3
          }}
        >
          Blogs
        </Typography>
        <Typography sx={{ color: "#4b5563", fontSize: "1.1rem" }}>
          Explore the latest insights, updates, and stories from our team.
        </Typography>
        {/* Placeholder for blog content */}
        <Box sx={{ mt: 5, p: 4, bgcolor: "#f9fafb", borderRadius: 2, textAlign: 'center' }}>
          <Typography sx={{ color: "#6b7280" }}>
            Blog posts coming soon...
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}
