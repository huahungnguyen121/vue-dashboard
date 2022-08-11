import axios from "axios";
import AppConstants from "../constants/app-constants.js";

export default axios.create({
    baseURL: AppConstants.BACKEND_API_URL,
    withCredentials: true,
});
