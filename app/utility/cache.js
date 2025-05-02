import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expireTime = 5; // minutes

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    logger.log("Error saving data", e);
  }
};

function isExpired(item) {
  const now = dayjs();
  const timestamp = dayjs(item.timestamp);
  return now.diff(timestamp, "minute") > expireTime;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (e) {
    logger.log("Error retrieving data", e);
  }
};

export default {
  store,
  get,
};
