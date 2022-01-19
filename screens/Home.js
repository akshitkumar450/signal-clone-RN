import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { auth } from "../firebase";

const Home = ({ navigation }) => {
  const logout = async () => {
    await auth.signOut();
    navigation.replace("Login");
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
