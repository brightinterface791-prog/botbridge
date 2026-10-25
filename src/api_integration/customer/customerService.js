import {
  getDashboard,
  getProfile,
  updateProfile,
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../api/customerApi";

class CustomerService {
  /**
   * Dashboard
   */
  async getDashboard() {
    return await getDashboard();
  }

  /**
   * Logged-in Customer Profile
   */
  async getProfile() {
    return await getProfile();
  }

  /**
   * Update Logged-in Customer Profile
   */
  async updateProfile(data) {
    return await updateProfile(data);
  }

  /**
   * Customer List
   */
  async getCustomers(params = {}) {
    return await getCustomers(params);
  }

  /**
   * Customer Details
   */
  async getCustomer(id) {
    return await getCustomer(id);
  }

  /**
   * Create Customer
   */
  async createCustomer(data) {
    return await createCustomer(data);
  }

  /**
   * Update Customer
   */
  async updateCustomer(id, data) {
    return await updateCustomer(id, data);
  }

  /**
   * Delete Customer
   */
  async deleteCustomer(id) {
    return await deleteCustomer(id);
  }
}

export default new CustomerService();