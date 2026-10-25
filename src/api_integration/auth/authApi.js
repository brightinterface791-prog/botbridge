import { apiRequest } from "../apiClient";

export const login = (data) =>
    apiRequest("/login", {
        method: "POST",
        body: data,
        auth: false,
    });

export const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
};