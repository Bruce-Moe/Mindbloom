import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { FontAwesome5 } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
// import Video from "react-native-video";

import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function CombattingAnxiety(props) {
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
            style={styles.header}
            source={require("../assets/headerText.jpg")}
          />
          <View style={{ alignItems: "center" }}>
            <View style={{ paddingBottom: 15 }}>
              <Image
                style={styles.chapter}
                source={require("../assets/chapterText.jpg")}
              />
            </View>
            <TouchableOpacity
              style={styles.video}
              onPress={() => {
                WebBrowser.openBrowserAsync("https://my.utexas.edu");
              }}
            >
              <Image
                style={styles.videoImg}
                source={require("../assets/Video.jpg")}
              />
            </TouchableOpacity>
            <Image
              style={styles.footer}
              source={require("../assets/Footer.jpg")}
            />
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
  topRow: {
    marginTop: getStatusBarHeight(),
    flex: 0.14,
    flexDirection: "row",
  },
  footer: {
    height: 329,
    width: 336.7,
  },
  inputWrap: {
    flex: 1,
  },
  middleRow: {
    flex: 0.8,
  },
  chapter: {
    height: 50,
    width: 300,
    marginBottom: 5,
  },
  header: {
    width: 240,
    height: 59.15,
    marginLeft: 30,
    marginBottom: 5,
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
  video: {
    marginBottom: 5,
  },
  videoImg: {
    width: 330,
    height: 185,
  },
});
