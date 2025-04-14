import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

function AppPicker({
  placeholder,
  icon,
  items,
  selectedItem,
  onItemSelect,
  width = "100%",
}) {
  const [visible, setVisible] = useState(false);

  const handleSelectItem = (item) => {
    onItemSelect(item.label);
    setVisible(false);
  };

  return (
    <>
      <TouchableWithoutFeedback
        activeOpacity={0.8}
        onPress={() => setVisible(true)}
      >
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles.icon}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => handleSelectItem(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
