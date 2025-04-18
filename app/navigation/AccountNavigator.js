import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Tab = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};
export default AccountNavigator;
