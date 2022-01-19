import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          type="password"
        />
      </View>
      {/**react native elements have container style instead of style */}
      <Button containerStyle={styles.btn} onPress={signIn} title="Login" />
      <Button containerStyle={styles.btn} title="Register" type="outline" />
      <View style={{ height: 10 }}></View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  btn: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "red",
  },
});