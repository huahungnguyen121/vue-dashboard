import axios from "axios";
import AppConstants from "../constants/app-constants.js";
import { emitter } from "../utils/emitter.js";
import { removeStorage, getStorage } from "../utils/local-storage.js";

const axiosInstance = axios.create({
    baseURL: AppConstants.BACKEND_API_URL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const usernameInStorage = getStorage("user")?.username;
        if (usernameInStorage !== undefined) {
            if (
                (error.response.status === 401 &&
                    error.response.data.message === "Access token expired") ||
                error.response.data.message === "Invalid access token"
            ) {
                const logout = async () => {
                    try {
                        await axiosInstance.delete("/auth/logout");
                    } catch (err) {
                        if (
                            err.response.status !== 400 &&
                            err.response.status !== 401
                        ) {
                            console.error(err);
                        }
                    }
                    removeStorage("user");
                    emitter.emit("loggedin", false);
                };
                logout();
                if (error.response.data.message === "Access token expired") {
                    alert("Login session expired. Please login again.");
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
