import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        console.log("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error getting location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
export default useLocation;
