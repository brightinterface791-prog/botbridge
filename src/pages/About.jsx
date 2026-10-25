import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import heroImage from "../assets/images/about_us_hero_1790523749832.jpg";

export default function About() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: "#030712", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Grid container spacing={6} sx={{ mb: 12, alignItems: "center" }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, background: "linear-gradient(90deg, #22c55e, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Redefining Business Efficiency through AI
              </Typography>
              <Typography variant="body1" sx={{ color: "#9ca3af", mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Bot Bridge isn't just an integration platform; it's the intelligent foundation your business needs to scale. We connect your favorite tools, automate complex workflows, and deploy smart AI agents that work 24/7 to boost your productivity.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={heroImage} alt="AI Integration" sx={{ width: "100%", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} />
            </Grid>
          </Grid>

          {/* Details Section */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}>How Bot Bridge Transforms Your Business</Typography>
          <Grid container spacing={4}>
            {[
              { title: "Unified Workflow", text: "Break down silos. Bot Bridge integrates seamlessly across messaging apps, CRM, and task managers." },
              { title: "Smart Automation", text: "Deploy intelligent bots that handle customer support, lead qualification, and internal processes instantly." },
              { title: "Scalable Growth", text: "Designed to grow with you. Our infrastructure handles thousands of requests per second with rock-solid reliability." },
              { title: "Data-Driven Insights", text: "Unlock valuable data. Our platform provides real-time analytics to help you make informed decisions." }
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper sx={{ p: 4, bgcolor: "#111827", borderRadius: "20px", border: "1px solid #1f2937" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#22c55e" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#d1d5db", lineHeight: 1.7 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}
