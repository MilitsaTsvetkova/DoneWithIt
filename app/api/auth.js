import apiClient from "./client";

const login = (email, password) => {
  return apiClient.post("/auth", { email, password });
};

export default {
  login,
};
