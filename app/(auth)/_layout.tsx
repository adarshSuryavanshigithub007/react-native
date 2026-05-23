import "../../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function AuthLayout() {
  return <Stack screenOptions={{ headerShown: false }} />
}
