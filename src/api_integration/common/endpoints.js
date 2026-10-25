const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    PROFILE: "/auth/profile",
    CHANGE_PASSWORD: "/auth/change-password",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    REFRESH_TOKEN: "/auth/refresh-token",
  },

  CUSTOMER: {
    DASHBOARD: "/customer/dashboard",
    PROFILE: "/customer/profile",
    UPDATE_PROFILE: "/customer/profile/update",
  },

  WHATSAPP: {
    EMBEDDED_SIGNUP: "/whatsapp/embedded-signup",
    BUSINESS_ACCOUNTS: "/whatsapp/business-accounts",
    PHONE_NUMBERS: "/whatsapp/phone-numbers",
    TEMPLATES: "/whatsapp/templates",
    CAMPAIGNS: "/whatsapp/campaigns",
    CONTACTS: "/whatsapp/contacts",
    CONVERSATIONS: "/whatsapp/conversations",
    WEBHOOK: "/whatsapp/webhook",
  },

  COMMON: {
    STATES: "/common/states",
    CITIES: "/common/cities",
    COUNTRIES: "/common/countries",
    SETTINGS: "/common/settings",
  },
};

export default ENDPOINTS;