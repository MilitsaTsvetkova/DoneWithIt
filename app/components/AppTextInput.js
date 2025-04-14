import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...props }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        {...props}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
