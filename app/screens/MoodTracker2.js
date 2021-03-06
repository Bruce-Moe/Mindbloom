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

export default function MoodTracker2(props) {
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
        </View>
        <View>
          <Image
            style={styles.title}
            source={require("../assets/checkInTitle.png")}
          />
        </View>
        <Text style={styles.questionText}>what have you been up to?</Text>
        <View style={styles.containerOther}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              props.navigation.navigate("MoodTracker1");
            }}
          >
            <Image
              style={styles.choices}
              source={require("../assets/choices.png")}
            ></Image>
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
  containerOther: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF2F8",
  },
  nextButton: {
    justifyContent: "center",
    backgroundColor: "#BAC3DE",
    opacity: 0,
    width: 350,
    height: 360,
  },
  topRow: {
    marginTop: getStatusBarHeight(),
    flex: 0.15,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
  },
  middleRow: {
    flex: 0.8,
  },
  choices: {
    width: 320,
    height: 510,
  },
  title: {
    width: 350,
    height: 100,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  questionText: {
    color: "#000000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    marginLeft: 31,
    marginTop: 10,
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
