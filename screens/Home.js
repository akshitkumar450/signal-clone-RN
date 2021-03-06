import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Avatar } from "react-native-elements";
import { auth, db } from "../firebase";
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
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsub = db.collection("chats").onSnapshot((snapshot) => {
      let temp = [];
      snapshot.docs.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      setChats(temp);
    });
    return () => {
      unsub();
    };
  }, []);
  console.log(chats);

  //   passing this fn to listitems ,where it get called with id and chatname
  const enterChat = (id, chatName) => {
    // passing the params to component in which we are going during the transition to new page
    navigation.navigate("ChatScreen", {
      id: id,
      chatName: chatName,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Button title="logout" onPress={logout} />
        {chats.map(({ chatName, id }) => {
          return (
            <ListItems
              key={id}
              enterChat={enterChat}
              id={id}
              chatName={chatName}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
