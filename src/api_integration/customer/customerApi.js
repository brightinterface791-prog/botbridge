import apiClient from "./apiClient";
import ENDPOINTS from "../utils/endpoints";

/**
 * Customer APIs
 */

// Dashboard
export const getDashboard = async () => {
  const response = await apiClient.get(ENDPOINTS.CUSTOMER.DASHBOARD);
  return response.data;
};

// Customer Profile
export const getProfile = async () => {
  const response = await apiClient.get(ENDPOINTS.CUSTOMER.PROFILE);
  return response.data;
};

// Update Profile
export const updateProfile = async (data) => {
  const response = await apiClient.put(
    ENDPOINTS.CUSTOMER.UPDATE_PROFILE,
    data
  );
  return response.data;
};

// Get Customer List
export const getCustomers = async (params = {}) => {
  const response = await apiClient.get("/customers", {
    params,
  });

  return response.data;
};

// Get Customer Details
export const getCustomer = async (id) => {
  const response = await apiClient.get(`/customers/${id}`);
  return response.data;
};

// Create Customer
export const createCustomer = async (data) => {
  const response = await apiClient.post("/customers", data);
  return response.data;
};

// Update Customer
export const updateCustomer = async (id, data) => {
  const response = await apiClient.put(`/customers/${id}`, data);
  return response.data;
};

// Delete Customer
export const deleteCustomer = async (id) => {
  const response = await apiClient.delete(`/customers/${id}`);
  return response.data;
};