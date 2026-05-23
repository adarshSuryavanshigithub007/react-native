import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="screen">
      <Text className="text-h2 font-bold text-foreground">SignIn</Text>
      <Link href="/(auth)/Sign-up" className="text-body text-primary">
        Create Account
      </Link>
    </View>
  );
}
