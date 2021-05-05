//Import navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
// Import screens
import LogInScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import MoodTracker1 from "./app/screens/MoodTracker1";
import MoodTrackerPetals from "./app/screens/MoodTrackerPetals";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MoodTrackerPetals"
          component={MoodTrackerPetals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoodTracker1"
          component={MoodTracker1}
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
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
