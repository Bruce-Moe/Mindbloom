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

export default function VisitFriends(props) {
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
            style={styles.friendsText}
            source={require("../assets/friendsText.jpg")}
          />
          <View style={{ alignItems: "center", marginTop: 18 }}>
            <TouchableOpacity
              style={{ paddingBottom: 0 }}
              activeOpacity={1}
              onPress={() => {
                props.navigation.navigate("friend garden");
              }}
            >
              <Image
                style={styles.friends}
                source={require("../assets/friendsPic.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "flex-end", paddingRight: 20 }}>
            <Image style={styles.rose} source={require("../assets/rose.jpg")} />
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
  friends: {
    height: 440,
    width: 376.2,
  },
  rose: {
    height: 150.75,
    width: 266.85,
  },
  friendsText: {
    width: 294,
    height: 60,
    marginLeft: 20,
  },
  topRow: {
    marginTop: getStatusBarHeight(),
    flex: 0.13,
    flexDirection: "row",
  },
  inputWrap: {
    flex: 1,
  },
  middleRow: {
    flex: 0.8,
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
