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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF2F8",
  },
  inputbox: {
    justifyContent: "center",
    backgroundColor: "#E7ECF2",
    width: 309,
    height: 37,
    borderRadius: 15,
    margin: 18,
  },
  inputtext: {
    marginLeft: 20,
    fontFamily: "Lora_400Regular",
    fontSize: 23,
    opacity: 0.37,
  },
  createbutton: {
    justifyContent: "center",
    backgroundColor: "#838EB1",
    opacity: 0.35,
    width: 318,
    height: 57,
    borderRadius: 17.33,
    marginTop: 30,
    marginBottom: 30,
  },
  createtext: {
    textAlign: "center",
    color: "black",
    fontSize: 23,
    fontFamily: "Montserrat_400Regular",
  },
  logo: {
    width: 156.68,
    height: 85.46,
  },
});
