import { apiRequest } from "../apiClient";

/* ==========================================
   Connection
========================================== */

export const connectWhatsApp = (data) =>
    apiRequest("/connect", {
        method: "POST",
        body: data,
    });

export const getConnectionStatus = () =>
    apiRequest("/whatsapp/status", {
        method: "GET",
    });

export const disconnectWhatsApp = () =>
    apiRequest("/whatsapp/disconnect", {
        method: "POST",
    });

/* ==========================================
   Embedded Signup
========================================== */

export const getSignupConfig = () =>
    apiRequest("/whatsapp/embedded-signup", {
        method: "GET",
    });

export const completeEmbeddedSignup = (data) =>
    apiRequest("/whatsapp/embedded-signup", {
        method: "POST",
        body: data,
    });