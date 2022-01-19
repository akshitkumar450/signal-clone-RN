import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Button, Avatar } from "react-native-elements";
import { auth } from "../firebase";
import ListItems from "./ListItems";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      alert(err.message);
    }
    navigation.replace("Login");
  };

  //   to change Navigation header options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "signal",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleStyle: {
        color: "black",
      },
      headerTintColor: "black", //for icons

      //   header left and right options
      headerLeft: () => (
        <View style={{ marginHorizontal: 5 }}>
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 60,
            marginRight: 10,
          }}>
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <AntDesign name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Button title="logout" onPress={logout} />
        <ListItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
