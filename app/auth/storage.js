import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.error("Error storing token:", error);
  }
};
const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Error retrieving token:", error);
  }
};
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing token:", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export default {
  storeToken,
  getToken,
  removeToken,
  getUser,
};
