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

export default function MoodTrackerPetals(props) {
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
            <TouchableOpacity style={styles.menuIcon}>
              <FontAwesome5 name="bars" size={30} color="#838EB1" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 0 }}>
          <Image
            style={styles.title}
            source={require("../assets/checkInTitle.png")}
          />
        </View>
        <Text style={styles.questionText}>how are you today?</Text>
        <Text style={styles.instruction}>
          rate your mental wellbeing on a scale of 1 petal to 10 petals (1 being
          the worst)
        </Text>
        <View style={styles.containerOther}>
          <Image
            style={styles.petals}
            source={require("../assets/coloredPetals.png")}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          >
            <Text style={styles.submitText}>done!</Text>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerOther: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF2F8",
  },
  topRow: {
    marginTop: getStatusBarHeight(),
    flex: 0.17,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
  },
  middleRow: {
    flex: 0.8,
  },
  petals: {
    width: 350,
    height: 360,
  },
  questionText: {
    color: "#000000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    marginLeft: 31,
    marginTop: 10,
  },
  instruction: {
    marginTop: 15,
    color: "#000000",
    fontFamily: "Montserrat_700",
    fontSize: 18,
    marginLeft: 31,
  },
  title: {
    width: 350,
    height: 100,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  logo: {
    width: 174.89,
    height: 92.95,
    marginLeft: 20,
  },
  submitButton: {
    justifyContent: "center",
    backgroundColor: "#BAC3DE",
    opacity: 75,
    width: 250,
    height: 50,
    borderRadius: 20,
    marginTop: 35,
    marginBottom: 35,
  },
  submitText: {
    textAlign: "center",
    color: "black",
    fontSize: 21,
    fontFamily: "Montserrat_400Regular",
  },
  menuIcon: {
    alignItems: "flex-end",
    marginTop: 35,
    marginRight: 20,
    color: "#838EB1",
  },
});
