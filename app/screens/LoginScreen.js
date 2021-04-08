import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function LoginScreen(props) {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={{ padding: 30 }}>
          <Image source={require("../assets/mindbloom_Logo.png")} />
        </View>

        <View style={{ padding: 10 }}>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputtext}
              placeholder="username"
              placeholderTextColor="#000000"
            />
          </View>

          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputtext}
              placeholder="password"
              placeholderTextColor="#000000"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.nextbutton}
          onPress={() => {
            props.navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.nextbuttontext}>login</Text>
        </TouchableOpacity>

        <View style={{ paddingTop: 20, flexDirection: "row" }}>
          <Text
            style={{
              color: "black",
              opacity: 0.71,
              fontFamily: "Lora_400Regular",
            }}
          >
            don't have an account? sign up
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Signup");
            }}
          >
            <Text style={styles.signuptext}> here. </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#ECF2F8",
  },
  inputbox: {
    justifyContent: "center",
    backgroundColor: "#D6DEE7",
    width: 298,
    height: 43,
    borderRadius: 15,
    margin: 18,
  },
  inputtext: {
    marginLeft: 20,
    fontFamily: "Lora_400Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 23,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    opacity: 0.37,
  },
  signuptext: {
    color: "#505F8E",
    fontFamily: "Lora_700Bold",
  },
  nextbutton: {
    justifyContent: "center",
    backgroundColor: "#838EB1",
    opacity: 0.65,
    width: 175,
    height: 41.58,
    borderRadius: 17.33,
    marginTop: 30,
    marginBottom: 30,
  },
  nextbuttontext: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontFamily: "Montserrat_400Regular",
  },
});
