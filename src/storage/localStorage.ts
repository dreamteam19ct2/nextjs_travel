export const saveTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    if (token) {
      return JSON.parse(token);
    }
    return null;
  } else {
    return null;
    // fallback solution for when localStorage is not available
  }
};

export const removeTokenToLocalStorage = () => {
  localStorage.removeItem("token");
};
