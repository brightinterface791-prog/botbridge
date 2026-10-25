import { Box, Typography, Container } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function RefundPolicy() {
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
          Refund Policy
        </Typography>
        <Typography sx={{ color: "#6b7280", mb: 5 }}>Last updated: September 27, 2026</Typography>
        
        {[
          { title: "1. Refund Eligibility", content: "We want you to be satisfied with our service. If you are not satisfied, please contact our support team." },
          { title: "2. Important Refund Limitation", content: "Please note that money will not be refunded if you have used the platform for one or more days.", sx: { color: "error.main", fontWeight: 600 } },
          { title: "3. How to Request a Refund", content: "To request a refund, please contact us at support@botbridge.com with your account details and the reason for your request." }
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700, color: section.sx?.color || "#111827" }}>
              {section.title}
            </Typography>
            <Typography sx={{ color: section.sx?.color || "#4b5563", lineHeight: 1.7, fontWeight: section.sx?.fontWeight || 400 }}>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Container>
    </MainLayout>
  );
}
