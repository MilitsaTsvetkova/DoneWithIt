import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({
  item: { backgroundColor, icon, label },
  onPress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={backgroundColor} name={icon} size={80} />
      </TouchableOpacity>
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
