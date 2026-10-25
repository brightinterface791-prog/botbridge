import { createContext, useContext, useEffect, useState } from "react";

import authStorage from "../api_integration/auth/authStorage";
import profileService from "../api_integration/profile/profileService";
import profileStorage from "../api_integration/profile/profileStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadProfile = async () => {

        try {

            const profile = await profileService.getProfile();

            setUser(profile);

            profileStorage.set(profile);

        } catch (error) {
            console.error(error);
            if (error.httpStatus === 401) {
                authStorage.clear();
                setUser(null);
            }
        } finally {

            setLoading(false);

        }

    };

    const logout = () => {

        authStorage.clear();

        setUser(null);

        window.location.href = "/login";

    };

    useEffect(() => {
        const token = authStorage.getToken();

        if (!token) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLoading(false);

            return;
        }

        loadProfile();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authenticated: !!user,
                loadProfile,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error("useAuth must be used inside AuthProvider");

    }

    return context;

}