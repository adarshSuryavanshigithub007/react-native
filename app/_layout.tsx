import { useFonts } from "expo-font";
import "../global.css";

import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-extra-bold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  })
 useEffect(()=>{
  if (fontsLoded) {
   SplashScreen.hideAsync();
    }
  }, [fontsLoded])
  if (!fontsLoded) return null;
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
