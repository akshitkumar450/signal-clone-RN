import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Avatar, Input } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { auth, db } from "../firebase";
import firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      // headerLeft: () => (
      //   <TouchableOpacity onPress={navigation.goBack}>
      //     <AntDesign name="arrowleft" size={24} color="white" />
      //   </TouchableOpacity>
      // ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            width: 80,
            justifyContent: "space-between",
          }}>
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const sendMessage = () => {
    Keyboard.dismiss();
    // make the new collection in the current doc and add data on that collection
    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photo: auth.currentUser.photoURL,
    });
    setInput("");
  };
  return (
    <SafeAreaView>
      {/**using the params passed from Home page */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>{/**chats */}</ScrollView>
            <View style={styles.footer}>
              <Input
                containerStyle={styles.input}
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="enter message"
              />
              <TouchableOpacity onPress={sendMessage}>
                <Ionicons name="send" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    height: "100%",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    bottom: 0,
    flex: 1,
    color: "gray",
    backgroundColor: "lightgray",
    borderRadius: 50,
    padding: 5,
    marginVertical: 20,
  },
});
