import { useAuthentication } from "../auth-provider/AuthProvider";

export const useLogoutClient = () => {
    const { token } = useAuthentication();
    
    return {
        logoutFromServer: async () => {
            const response = await fetch("/api/auth/logout/", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + token,
                },
            });
        }
    }
};
