export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token ? true : false;
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login"; // It will redirect to login page
};