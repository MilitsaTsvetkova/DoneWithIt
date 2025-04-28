import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ imageUrl, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subtitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
