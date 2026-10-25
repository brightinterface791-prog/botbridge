import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { AuthProvider } from "./context/AuthProvider";

import Home from "./pages/Home";
import Login from "./pages/portal/auth/Login";
import Register from "./pages/portal/auth/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import PricingPage from "./pages/PricingPage";
import FeaturesPage from "./pages/FeaturesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import BlogsPage from "./pages/BlogsPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import CommunityPage from "./pages/CommunityPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/portal/dashboard/Dashboard";
import InboxPage from "./pages/portal/inbox/InboxPage";
import ChatbotsPage from "./pages/portal/chatbots/ChatbotsPage";
import WorkflowPage from "./pages/portal/workflow/WorkflowPage";
import CheckoutPage from "./pages/CheckoutPage";
import VerifyOtp from "./pages/portal/auth/VerifyOtp";
import Companyregister from "./pages/portal/auth/Companyregister";
import DashboardLayout from "./layouts/DashboardLayout";

import BroadcastDashboard from "./broadcast/pages/Dashboard";
import CreateCampaign from "./broadcast/pages/CreateCampaign";

// Wrapper for pages without sidebar/header

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/help-center" element={<HelpCenterPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inbox" element={<InboxPage />} />
              <Route path="/chatbots" element={<ChatbotsPage />} />
              <Route path="/workflows" element={<WorkflowPage />} />
              <Route path="/broadcast" element={<BroadcastDashboard />} />
              <Route path="/broadcast/create" element={<CreateCampaign />} />
            </Route>

            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/company-registration" element={<Companyregister />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
