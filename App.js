import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <GestureHandlerRootView>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </GestureHandlerRootView>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
