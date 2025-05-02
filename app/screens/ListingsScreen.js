import { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import colors from "../config/colors";

import listingsApi from "../api/listings";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/mosh.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    isLoading,
    request: fetchListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={isLoading} />

      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Could not retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={fetchListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={
                item.images && item.images.length > 0
                  ? item.images[0].url
                  : null
              }
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={
                item.images && item.images.length > 0
                  ? item.images[0].thumbnailUrl
                  : null
              }
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
