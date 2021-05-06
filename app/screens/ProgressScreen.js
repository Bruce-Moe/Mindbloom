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
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function ProgressScreen(props) {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.inputWrap}>
            <Image
              style={styles.logo}
              source={require("../assets/mindbloom_Logo.png")}
            />
          </View>
          <View style={styles.inputWrap}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            >
              <FontAwesome5 name="bars" size={30} color="#838EB1" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middleRow}>
          <Image
            style={styles.logo2}
            source={require("../assets/progressPage.jpg")}
          />
          <TouchableOpacity
            style={styles.mod}
            activeOpacity={1}
            onPress={() => {
              props.navigation.navigate("modules");
            }}
          >
            <Image
              style={styles.modules}
              source={require("../assets/modules.jpg")}
            />
          </TouchableOpacity>
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
  modules: {
    height: 140,
    width: 350,
  },
  flowerText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
  },
  progress: {
    height: 120,
    width: 315,
  },
  logo2: {
    width: 351.2,
    height: 520,
    paddingLeft: 20,
  },
  topRow: {
    marginTop: getStatusBarHeight(),
    flex: 0.17,
    flexDirection: "row",
    paddingBottom: 100,
  },
  inputWrap: {
    flex: 1,
  },
  middleRow: {
    alignItems: "center",
    justifyContent: "center",
  },
  progressContainer: {
    marginTop: 10,
    height: 130,
    width: "90%",
    borderRadius: 28,
    backgroundColor: "#FBFCFD",
    alignItems: "center",
    justifyContent: "center",
  },
  goalText: {
    marginTop: 50,
    color: "#838EB1",
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
  },
  gardenText: {
    width: 192,
    height: 64.8,
    marginLeft: 20,
  },
  garden: {
    width: 392,
    height: 315,
  },
  logo: {
    width: 174.89,
    height: 92.95,
    marginLeft: 20,
  },
  menuIcon: {
    alignItems: "flex-end",
    marginTop: 35,
    marginRight: 20,
    color: "#838EB1",
  },
});
