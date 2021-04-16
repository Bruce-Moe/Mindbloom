import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function HomeScreen(props) {
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
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Image
              style={styles.logo}
              source={require("../assets/mindbloom_Logo.png")}
            />
          </View>
          <View style={styles.inputWrap}>
            <TouchableOpacity style={styles.menuIcon}>
              <FontAwesome5 name="bars" size={24} color="#161924" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF2F8",
  },
  row: {
    marginTop: getStatusBarHeight(),
    flex: 1,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
  },
  logo: {
    width: 134.53,
    height: 71.5,
    marginLeft: 10,
  },
  menuIcon: {
    alignItems: "flex-end",
    marginTop: 22,
    marginRight: 10,
    color: "#838EB1",
  },
});
