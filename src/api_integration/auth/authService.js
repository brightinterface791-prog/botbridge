import {
  login,
  logout,
} from "../auth/authApi";

import authStorage from "../auth/authStorage";

class AuthService {
  /**
   * Login User
   */
  async login(credentials) {
    const response = await login(credentials);

    if (response.status) {
      if (response.data?.token) {
        authStorage.setToken(response.data.token);
      }

      if (response.data?.refreshToken) {
        authStorage.setRefreshToken(response.data.refreshToken);
      }

      if (response.data?.user) {
        authStorage.setUser(response.data.user);
      }

      if (response.data?.whatsapp_token) {
        authStorage.setWhatsAppToken(response.data.whatsapp_token);
      }

      // If user is not returned in login response,
      // fetch it from profile API
      // if (!response.data?.user) {
      //   await this.getProfile();
      // }
    }

    return response;
  }

  /**
   * Register User
   */
  // async register(data) {
  //   return await register(data);
  // }

  /**
   * Logout User
   */
  // async logout() {
  //   try {
  //     await logout();
  //   } catch (error) {
  //     // Ignore API errors during logout
  //   } finally {
  //     authStorage.clear();
  //   }
  // }

  /**
   * Forgot Password
   */
  // async forgotPassword(email) {
  //   return await forgotPassword(email);
  // }

  /**
   * Reset Password
   */
  // async resetPassword(data) {
  //   return await resetPassword(data);
  // }

  /**
   * Change Password
   */
  // async changePassword(data) {
  //   return await changePassword(data);
  // }

  /**
   * Get Logged-in User Profile
   */
  // async getProfile() {
  //   const response = await getProfile();

  //   if (response?.user) {
  //     authStorage.setUser(response.user);
  //   }

  //   return response;
  // }

  /**
   * Get Access Token
   */
  getToken() {
    return authStorage.getToken();
  }

  /**
   * Get Refresh Token
   */
  getRefreshToken() {
    return authStorage.getRefreshToken();
  }

  /**
   * Get Current User
   */
  getUser() {
    return authStorage.getUser();
  }

  /**
   * Check Authentication
   */
  isAuthenticated() {
    return authStorage.isAuthenticated();
  }

  /**
   * Clear Session
   */
  clearSession() {
    authStorage.clear();
  }
}

export default new AuthService();