import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutPage() {
    const { state } = useLocation();

    const planName = state?.planName || "Professional";

    const basePrice =
        planName === "Starter"
        ? 0
        : planName === "Professional"
        ? 999
        : 4999;

    const gst = (basePrice * 18) / 100;
    const grandTotal = basePrice + gst;

    // const handlePayment = async () => {
    // const options = {
    //     key: "YOUR_RAZORPAY_KEY",
    //     amount: grandTotal * 100,
    //     currency: "INR",
    //     name: "Your Company",
    //     description: `${planName} Plan`,
    //     handler: function (response: any) {
    //     console.log(response);
    //     },
    //     theme: {
    //     color: "#22c55e",
    //     },
    // };

    // const rzp = new (window as any).Razorpay(options);
    // rzp.open();
    // };

  return (
    <>
    <Header />

      {/* Checkout Section */}
      <Box
        sx={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f8fafc",
          p: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 600,
            p: 4,
            borderRadius: 4,
            border: "1px solid #e5e7eb",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            mb={4}
          >
            Checkout
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography>Plan</Typography>
            <Typography fontWeight={600}>
              {planName}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography>Price</Typography>
            <Typography>
              ₹{basePrice.toLocaleString()}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Typography>GST (18%)</Typography>
            <Typography>
              ₹{gst.toLocaleString()}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Typography fontWeight={700}>
              Grand Total
            </Typography>

            <Typography
              fontWeight={800}
              fontSize={24}
              color="primary"
            >
              ₹{grandTotal.toLocaleString()}
            </Typography>
          </Box>

          <Button
            fullWidth
            size="large"
            variant="contained"
            // onClick={handlePayment}
            sx={{
              py: 1.8,
              borderRadius: 3,
              background:
                "linear-gradient(90deg,#22c55e,#3b82f6)",
            }}
          >
            Pay Now
          </Button>
        </Paper>
      </Box>

      <Footer />
    </>
  );
}