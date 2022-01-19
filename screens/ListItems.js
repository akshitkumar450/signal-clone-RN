import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { db } from "../firebase";

const ListItems = ({ id, chatName, enterChat }) => {
  return (
    <ListItem bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800 " }}>
          {chatName}
        </ListItem.Title>
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
