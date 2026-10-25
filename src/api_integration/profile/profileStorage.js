const PROFILE_KEY = "user_profile";

const profileStorage = {
    get() {
        const data = localStorage.getItem(PROFILE_KEY);
        return data ? JSON.parse(data) : null;
    },

    set(profile) {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    },

    clear() {
        localStorage.removeItem(PROFILE_KEY);
    }
};

export default profileStorage;