//Import navigation
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
// Import screens
import LogInScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import HomeScreen2 from "./app/screens/HomeScreen2";
import MoodTrackerPetalsScreen from "./app/screens/MoodTrackerPetals";
import MoodTracker1Screen from "./app/screens/MoodTracker1";
import MoodTracker2Screen from "./app/screens/MoodTracker2";
import ProgressScreen from "./app/screens/ProgressScreen";
import ModuleScreen from "./app/screens/CombattingAnxiety";
import FriendsScreen from "./app/screens/VisitFriends";
import FriendGarden from "./app/screens/FriendGarden";
import InitialScreen from "./app/screens/InitialScreen";

import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Friends() {
  return (
    <Stack.Navigator initialRouteName="friends screen">
      <Stack.Screen
        name="friends screen"
        component={FriendsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="friend garden"
        component={FriendGarden}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const MoodWithSetterView = () => {
    return <MoodTrackerPetalsScreen logInSetter={setLoggedIn} />;
  };

  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (loggedIn) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="your garden"
          drawerContentOptions={{
            activeTintColor: "#838EB1",
            style: { backgroundColor: "#ECF2F8" },
            itemStyle: { padding: 10 },
            labelStyle: {
              fontFamily: "Lora_400Regular",
              color: "#838EB1",
              fontSize: 23,
            },
          }}
        >
          <Drawer.Screen
            name="your garden"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="progress"
            component={ProgressScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="modules"
            component={ModuleScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="visit friends"
            component={Friends}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen
            name="Initial"
            component={InitialScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="daily mood check"
            component={MoodTracker2Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MoodTracker1"
            component={MoodTracker1Screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MoodTrackerPetals"
            component={MoodWithSetterView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
