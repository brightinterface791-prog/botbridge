import { Container, Typography, Box, Grid, TextField, Button, Paper, Divider } from "@mui/material";
import MainLayout from "../layouts/MainLayout";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function Contact() {
  return (
    <MainLayout>
      <Box sx={{ bgcolor: "#030712", color: "white", py: 12 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, mb: 3, background: "linear-gradient(90deg, #22c55e, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Let's Connect
            </Typography>
            <Typography variant="h6" sx={{ color: "#9ca3af", maxWidth: "600px", mx: "auto" }}>
              Have questions or ready to get started? Our team is standing by to help you unlock the power of automation.
            </Typography>
          </Box>

          {/* Contact Details Grid */}
          <Grid container spacing={4} sx={{ mb: 12 }}>
            {[
              { icon: <EmailIcon sx={{ fontSize: 32 }} />, title: "Email Us", value: "support@botbridge.com", sub: "Drop us a line anytime." },
              { icon: <PhoneIcon sx={{ fontSize: 32 }} />, title: "Call Us", value: "+1 (555) 123-4567", sub: "Mon-Fri, 9am - 5pm EST." },
              { icon: <ChatBubbleIcon sx={{ fontSize: 32 }} />, title: "Live Chat", value: "Start a Conversation", sub: "Instant answers from our team." }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 4, height: "100%", bgcolor: "#111827", borderRadius: "24px", border: "1px solid #1f2937", transition: "transform 0.3s ease", "&:hover": { transform: "translateY(-10px)", borderColor: "#3b82f6" } }}>
                  <Box sx={{ color: "#22c55e", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{item.title}</Typography>
                  <Typography sx={{ fontWeight: 600, color: "#3b82f6", mb: 1 }}>{item.value}</Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>{item.sub}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Contact Form */}
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, textAlign: "center" }}>Send us a message</Typography>
            <Paper sx={{ p: { xs: 4, md: 8 }, bgcolor: "#111827", borderRadius: "32px", border: "1px solid #1f2937" }}>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField label="Full Name" variant="outlined" fullWidth slotProps={{ inputLabel: { style: { color: "#9ca3af" } }, input: { style: { color: "white" }, sx: { borderRadius: "12px", bgcolor: "#030712" } } }} sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#1f2937", borderRadius: "12px" } } }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField label="Email Address" variant="outlined" fullWidth slotProps={{ inputLabel: { style: { color: "#9ca3af" } }, input: { style: { color: "white" }, sx: { borderRadius: "12px", bgcolor: "#030712" } } }} sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#1f2937", borderRadius: "12px" } } }} />
                    </Grid>
                </Grid>
                <TextField label="Subject" variant="outlined" fullWidth slotProps={{ inputLabel: { style: { color: "#9ca3af" } }, input: { style: { color: "white" }, sx: { borderRadius: "12px", bgcolor: "#030712" } } }} sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#1f2937", borderRadius: "12px" } } }} />
                <TextField label="How can we help?" variant="outlined" multiline rows={6} fullWidth slotProps={{ inputLabel: { style: { color: "#9ca3af" } }, input: { style: { color: "white" }, sx: { borderRadius: "12px", bgcolor: "#030712" } } }} sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#1f2937", borderRadius: "12px" } } }} />
                <Button variant="contained" size="large" sx={{ mt: 2, background: "linear-gradient(90deg, #22c55e, #3b82f6)", borderRadius: "12px", py: 2, fontWeight: 700, fontSize: "1.1rem", textTransform: "none" }}>
                  Submit Inquiry
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
}
