import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";

const imgPath = require("./assets/Facebook_logo.png");
const imgPath1 = require("./assets/Google.jpg");

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Please sign in to your account</Text>

      <TextInput
        style={styles.input1}
        placeholder="Username"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input2}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={"white"}
      />

      <Text style={styles.text3}>Forgot Password?</Text>
      <TouchableOpacity style={styles.firstButton}>
        <Text style={styles.title}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondButton}>
        <Image source={imgPath1} style={styles.buttonImage} />
        <Text style={styles.title1}>Sign In With Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.thirdButton}>
        <Image source={imgPath} style={styles.buttonImage} />
        <Text style={styles.title}>Sign In With Facebook</Text>
      </TouchableOpacity>

      <View style={styles.horizontalContainer}>
        <Text style={styles.text4}>Don't have an account?</Text>
        <Text style={styles.text5}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black",
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  text2: {
    fontSize: 18,
    fontWeight: "700",
    color: "gray",
    marginBottom: 100,
  },

  input1: {
    height: 70,
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 20,
    padding: 20,
    paddingRight: 30,
    backgroundColor: "gray",
    opacity: 0.7,
  },
  input2: {
    height: 70,
    borderWidth: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 15,
    padding: 20,
    paddingRight: 30,
    borderRadius: 20,
    backgroundColor: "gray",
    opacity: 0.7,
  },
  text3: {
    color: "white",
    marginBottom: 20,
    alignself: "flex-end",
  },
  text4: {
    marginTop: 20,
    color: "gray",
  },

  firstButton: {
    height: 60,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  secondButton: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdButton: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text4: {
    color: "white",
    marginRight: 10,
  },
  text5: {
    color: "blue",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonImage: {
    width: 35,
    height: 30,
    marginRight: 10,
  },
});

export default App;
