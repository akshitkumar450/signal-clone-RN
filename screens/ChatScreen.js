import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatScreen = ({ navigation, route }) => {
  return (
    <View>
      {/**using the params passed from Home page */}
      <Text>{route.params.chatName}</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
