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

export default function WelcomeScreen(props) {
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
        <View>
          <Text style={styles.welcomeText}> Welcome, David </Text>
        </View>
        <View style={{ padding: 41.5 }}>
          <Image
            style={styles.logo}
            source={require("../assets/mindbloom_Logo.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>enter your garden</Text>
        </TouchableOpacity>
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
  welcomeText: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "700",
    fontSize: 36,
    color: "#838EB1",
  },
  logo: {
    width: 366.6,
    height: 195,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#838EB1",
    opacity: 0.35,
    width: 318,
    height: 57,
    borderRadius: 17.33,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 23,
    fontWeight: "500",
    fontFamily: "Lora_400Regular",
    opacity: 1,
  },
});
