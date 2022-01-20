import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { db } from "../firebase";

const ListItems = ({ id, chatName, enterChat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let temp = [];
        snapshot.docs.forEach((doc) => {
          temp.push({ ...doc.data() });
        });
        setMessages(temp);
      });
    return () => {
      unsub();
    };
  }, []);
  return (
    <ListItem bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{
          uri:
            messages?.[0]?.photo ||
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800 " }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {/**showing the last message sent */}
          {messages?.[0]?.displayName}:{messages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
