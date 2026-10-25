import { apiRequest } from "../apiClient";

const profileApi = {
  getProfile() {
    return apiRequest("/profile", {
      method: "GET",
    });
  },
};


export default profileApi;