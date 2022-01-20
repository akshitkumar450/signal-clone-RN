import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Avatar, Input, ButtonGroup } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [name, setName] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "add new chat",
      headerBackTitle: "chats", //ios only
    });
  }, [navigation]);

  const createChat = async () => {
    try {
      await db.collection("chats").add({
        chatName: name,
      });
    } catch (err) {
      alert(arr.message);
    }
    // to back to prev screen
    navigation.goBack();
    setName("");
  };
  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="enter a chat name"
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!name} onPress={createChat} title="create new chat" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({});
