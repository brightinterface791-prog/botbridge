import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const billingService = {
  // Manual
  createOrder: (planId) =>
    api.post("/payment/create-order", {
      plan_id: planId,
    }),

  verifyPayment: (payload) =>
    api.post("/payment/verify", payload),

  // Automatic
  createSubscription: (planId) =>
    api.post("/subscription/create", {
      plan_id: planId,
    }),

  verifySubscription: (payload) =>
    api.post("/subscription/verify", payload),

  // Common
  getCurrentSubscription: () =>
    api.get("/subscription/current"),

  getPaymentHistory: () =>
    api.get("/payment/history"),

  getPaymentStatus: (paymentId) =>
    api.get(`/payment/status/${encodeURIComponent(paymentId)}`),

  cancelSubscription: () =>
    api.post("/subscription/cancel"),
};
