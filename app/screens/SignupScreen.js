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

export default function SignupScreen(props) {
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
          <Image
            style={styles.logo}
            source={require("../assets/mindbloom_Logo.png")}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Image
            style={styles.title}
            source={require("../assets/createtitle.png")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputtext}
              placeholder="full name"
              placeholderTextColor="#000000"
            />
          </View>

          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputtext}
              placeholder="username"
              placeholderTextColor="#000000"
              secureTextEntry={true}
              autoCapitalize="none"
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
          <View style={styles.inputbox}>
            <TextInput
              style={styles.inputtext}
              placeholder="confirm password"
              placeholderTextColor="#000000"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.createbutton}
          onPress={() => {
            props.navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.createtext}>create your account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    backgroundColor: "#ECF2F8",
  },
  containertitle: {
    flex: 1,
    alignItems: "left",
    justifyContent: "left",
    backgroundColor: "#ECF2F8",
  },
  title: {
    width: 220,
    height: 35,
    marginLeft: -110,
  },
  inputbox: {
    justifyContent: "center",
    backgroundColor: "#E7ECF2",
    width: 309,
    height: 37,
    borderRadius: 15,
    margin: 18,
    borderColor: "#000000",
    borderWidth: 0.8,
  },
  inputtext: {
    marginLeft: 20,
    fontFamily: "Lora_400Regular",
    fontSize: 23,
    opacity: 0.37,
  },
  createbutton: {
    justifyContent: "center",
    backgroundColor: "#BAC3DE",
    opacity: 75,
    width: 250,
    height: 50,
    borderRadius: 20,
    marginTop: 35,
    marginBottom: 35,
  },
  createtext: {
    textAlign: "center",
    color: "black",
    fontSize: 21,
    fontFamily: "Montserrat_400Regular",
  },
  logo: {
    width: 156.68,
    height: 85.46,
  },
});
