import { useState } from "react";
import { StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchListings = async () => {
    setIsLoading(true);
    const response = await getListings();
    setIsLoading(false);

    if (!response.ok) {
      return setError(true);
    }

    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could not retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={fetchListings} />
        </>
      )}
      <ActivityIndicator visible={isLoading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
