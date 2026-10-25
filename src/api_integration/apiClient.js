const BASE_URL = "/api";
/**
 * Generic API Request Function
 */
export async function apiRequest(
  endpoint,
  {
    method = "GET",
    body = null,
    auth = true,
    headers = {},
    timeout = 30000,
  } = {}
) {
  const token = localStorage.getItem("access_token");

  const requestHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...headers,
  };

  if (auth) {
    if (!token) {
      localStorage.clear();
      window.location.href = "/login";
      throw new Error("Authentication token not found.");
    }

    requestHeaders.Authorization = `Bearer ${token}`;
  }

  // Timeout Support
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  const fullUrl = `${BASE_URL}${endpoint}`;

  try {
    console.log("API Request URL:", fullUrl);
    const response = await fetch(fullUrl, {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : null,
      signal: controller.signal,
      mode: 'cors',
    });

    clearTimeout(timer);

    // Read response as text first
    const responseText = await response.text();

    let result = {};

    if (responseText) {
      try {
        result = JSON.parse(responseText);
      } catch {
        throw {
          status: false,
          message: "Invalid JSON returned from server.",
          rawResponse: responseText,
          url: fullUrl,
        };
      }
    }

    // Handle Unauthorized
    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";

      throw {
        status: false,
        message: result.message || "Unauthorized",
        url: fullUrl,
      };
    }

    // Handle Other HTTP Errors
    if (!response.ok) {
      throw {
        status: false,
        httpStatus: response.status,
        message:
          result.message ||
          `Request failed with status ${response.status}`,
        data: result,
        url: fullUrl,
      };
    }

    return result;
  } catch (error) {
    clearTimeout(timer);

    if (error.name === "AbortError") {
      throw {
        status: false,
        message: "Request timed out.",
        url: fullUrl,
      };
    }

    if (error.status !== undefined) {
      throw error;
    }

    throw {
      status: false,
      message: `${error.message || "Network error occurred."} at ${fullUrl}`,
      url: fullUrl,
    };
  }
}