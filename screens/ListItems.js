import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

const ListItems = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800 " }}>chats</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil
          harum sequi corrupti cupiditate, velit voluptates aspernatur eum vero
          nulla.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
