import { REFRESH_KEY_CONSTANT, STORAGE_KEY_CONSTANT, USER_INFO } from "@/common/constants"

export const getToken = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem(STORAGE_KEY_CONSTANT) ?? "";
        return token;
    }
}

export const getRefreshToken = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem(REFRESH_KEY_CONSTANT) ?? "";
        return token;
    }
}

export const getUserInfo = () => {
    if (typeof window !== "undefined") {
        const info = localStorage.getItem(USER_INFO) ?? "";
        return JSON.parse(info);
    }
}