import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (authToken) => {
    const user = jwtDecode(authToken);

    setUser(user);

    authStorage.storeToken(authToken);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {
    user,
    setUser,
    logout,
    login,
  };
};
