import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();
const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#2c6bed",
  },
  headerTitleStyle: {
    color: "white",
  },
  headerTintColor: "white", //for icons
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Lets sign up",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
