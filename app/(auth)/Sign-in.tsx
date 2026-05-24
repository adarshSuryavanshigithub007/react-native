import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-h2 font-bold text-foreground">SignIn</Text>
      <Link href="/(auth)/Sign-up" className="text-body text-primary">
        Create Account
      </Link>
      <Link href="/" className="text-body text-primary">Home</Link>
    </SafeAreaView>
  );
}
