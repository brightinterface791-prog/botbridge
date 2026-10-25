/**
 * Authentication Storage Helper
 */

const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const WHATSAPP_TOKEN_KEY = "whatsapp_token";
const USER_KEY = "user";

const authStorage = {
  /**
   * Save Access Token
   */
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  /**
   * Get Access Token
   */
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Remove Access Token
   */
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  /**
   * Save Refresh Token
   */
  setRefreshToken(token) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },

  /**
   * Get Refresh Token
   */
  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  /**
   * Remove Refresh Token
   */
  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },  /**
   * Save WhatsApp Token
   */
  setWhatsAppToken(token) {
    localStorage.setItem(WHATSAPP_TOKEN_KEY, token);
  },

  /**
   * Get WhatsApp Token
   */
  getWhatsAppToken() {
    return localStorage.getItem(WHATSAPP_TOKEN_KEY);
  },

  /**
   * Remove WhatsApp Token
   */
  removeWhatsAppToken() {
    localStorage.removeItem(WHATSAPP_TOKEN_KEY);
  },

  /**
   * Save User
   */
  setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  /**
   * Get User
   */
  getUser() {
    const user = localStorage.getItem(USER_KEY);

    if (!user) return null;

    try {
      return JSON.parse(user);
    } catch (error) {
      return null;
    }
  },

  /**
   * Remove User
   */
  removeUser() {
    localStorage.removeItem(USER_KEY);
  },

  /**
   * Check Authentication
   */
  isAuthenticated() {
    return !!this.getToken();
  },

  /**
   * Clear Authentication Data
   */
  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(WHATSAPP_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

export default authStorage;