import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import expoPushTokenApi from "../api/expoPushTokens";

// Required
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Notifications.getPermissionsAsync();
      if (!permissions.granted) {
        const finalPermissions = await Notifications.requestPermissionsAsync();
        if (!finalPermissions.granted) {
          return;
        }
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
