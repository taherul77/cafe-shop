import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../component/hook/url";


const AuthContext = createContext();


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const tokenStoragePath = "accessToken";
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [userFetched, setUserFetched] = useState(false);
    const [shouldRefresh, setShouldRefresh] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        if (token && !userFetched) {
            setIsLoading(true);
            getUserData(token)
                .then((userData) => {
                    setUserFetched(true);
                    setCurrentUser(userData);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefresh]);

    const refresh = () => {
        setShouldRefresh(!shouldRefresh);
    };

    const login = async (userData) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/login`,
                userData
            );
            if (response?.data?.success && response?.data?.token && response.status === 201) {
                localStorage.setItem(tokenStoragePath, response?.data?.token);
                setCurrentUser(response?.data?.user);
                return true;
            } else {
                return( `${response?.data?.message}`);
            }
        } catch (e) {
            if (e?.response) {
                return (
                    e?.response?.data?.message ||
                    "Login failed. Please try again."
                );
            } else {
                return "Login failed. Please try again.";
            }
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem(tokenStoragePath);
        toast.success("Logout successful")
    };

    const getUserData = async (token) => {
        try {
            const response = await axios.get(`${BASE_URL}/user/current-user`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response?.data?.user;
        } catch (e) {
            logout();
        }
    };

    const value = {
        currentUser,
        isLoading,
        login,
        logout,
        refresh,
        setCurrentUser,
        getUserData,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
