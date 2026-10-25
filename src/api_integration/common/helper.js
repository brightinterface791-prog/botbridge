/**
 * Format Date
 */
export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN");
};

/**
 * Format Date Time
 */
export const formatDateTime = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleString("en-IN");
};

/**
 * Currency Formatter
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount || 0);
};

/**
 * Generate Random String
 */
export const randomString = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
};

/**
 * Capitalize First Letter
 */
export const capitalize = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Copy Text
 */
export const copyToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
};

/**
 * Check Empty Value
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
};

/**
 * Sleep
 */
export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Debounce
 */
export const debounce = (func, delay = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};