import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className="screen">
      <Text className="text-h2 font-bold text-foreground">SignUp</Text>
      <Link href="/(auth)/Sign-in" className="text-body text-primary">
        Sign In
      </Link>
    </View>
  );
}