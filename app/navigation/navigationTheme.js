import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.primary,
  },
};
export default navigationTheme;
