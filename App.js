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
import MoodTracker1 from "./app/screens/MoodTracker1";
import MoodTrackerPetals from "./app/screens/MoodTrackerPetals";
import MoodTracker1Screen from "./app/screens/MoodTracker1";
import MoodTracker2Screen from "./app/screens/MoodTracker2";
import ProgressScreen from "./app/screens/ProgressScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const WelcomeWithSetterView = () => {
    return <WelcomeScreen logInSetter={setLoggedIn} />;
  };
  if (loggedIn) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="MoodTracker2"
            component={MoodTracker2Screen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="MoodTracker1"
            component={MoodTracker1}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="MoodTrackerPetals"
            component={MoodTrackerPetals}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="your garden"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="daily mood check"
            component={MoodTracker2Screen}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="progress"
            component={ProgressScreen}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
            component={WelcomeWithSetterView}
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
