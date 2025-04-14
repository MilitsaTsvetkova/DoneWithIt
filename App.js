import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}
