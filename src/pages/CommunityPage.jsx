import { Container, Typography } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function CommunityPage() {
  return (
    <MainLayout>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>Community</Typography>
        <Typography>Join our community to connect with other users.</Typography>
      </Container>
    </MainLayout>
  );
}
