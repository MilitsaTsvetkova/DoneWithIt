import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number()
    .required()
    .positive()
    .integer()
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup.string().label("Description").optional(),
  category: Yup.string().required().label("Category").nullable(),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  {
    label: "Movies & Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
];

function ListingEditScreen() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      console.log("Permission to access location was denied");
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width="30%"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
