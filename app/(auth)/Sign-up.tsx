import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

export default function SignUp() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-h2 font-bold text-foreground">SignUp</Text>
      <Link href="/(auth)/Sign-in" className="text-body text-primary">
        Sign In
      </Link>
    </SafeAreaView>
  );
}