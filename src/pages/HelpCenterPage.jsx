import { Container, Typography } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function HelpCenterPage() {
  return (
    <MainLayout>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>Help Center</Typography>
        <Typography>Find answers to common questions and get support here.</Typography>
      </Container>
    </MainLayout>
  );
}
