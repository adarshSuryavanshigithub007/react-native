import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-lg bg-background px-screen">
      <Text className="text-h2 font-bold text-foreground">shree ganeshaya namaha</Text>
      <Link href="/Onboarding" className="btn btn-primary">
        On Boarding
      </Link>
      <Link href="/(auth)/Sign-in" className="btn btn-secondary">
        Sign In
      </Link>
      <Link href="/(auth)/Sign-up" className="btn btn-muted">
        Sign Up
      </Link>
    </View>
  );
}
