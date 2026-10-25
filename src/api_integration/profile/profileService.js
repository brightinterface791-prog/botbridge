import profileApi from "./profileApi";

const profileService = {
  async getProfile() {
    const response = await profileApi.getProfile();

    return response.data;
  },
};

export default profileService;