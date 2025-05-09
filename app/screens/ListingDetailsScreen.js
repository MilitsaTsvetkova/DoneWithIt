import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const { title, price, images } = listing;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={images[0].url}
        preview={{ uri: images[0].thumbnailUrl }}
        style={styles.image}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="5 Listings"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <ContactSellerForm listing={listing} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
