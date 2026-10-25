import { Box, Typography, Container } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </Typography>
        <Typography sx={{ color: "#6b7280", mb: 5 }}>Last updated: September 27, 2026</Typography>
        
        {[
          { title: "1. Introduction", content: "Welcome to Bot Bridge. We are committed to protecting your personal information and your right to privacy. This privacy policy explains how we collect, use, and disclose information when you use our services." },
          { title: "2. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, company details, and WhatsApp business information." },
          { title: "3. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process your transactions, and communicate with you about updates, offers, and support." },
          { title: "4. Data Sharing and Disclosure", content: "We do not sell your personal information. We may share your information with third-party service providers who help us operate our platform, provided they adhere to strict confidentiality agreements." },
          { title: "5. Security", content: "We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction." },
          { title: "6. Contact Us", content: "If you have any questions about this privacy policy, please contact us at support@botbridge.com." }
        ].map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700, color: "#111827" }}>
              {section.title}
            </Typography>
            <Typography sx={{ color: "#4b5563", lineHeight: 1.7 }}>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Container>
    </MainLayout>
  );
}
