const settings = {
  dev: {
    apiUrl: "http://192.168.1.100:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.100:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.1.100:9000/api",
  },
};

const getSettingsConfig = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getSettingsConfig();
