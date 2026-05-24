import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-background p-5"
    >
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
      <Link href="/subscriptions/spotify" className="btn btn-muted">
        Spotify
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "cloude" } }}
        className="btn btn-muted"
      >
        Clouded
      </Link>
    </SafeAreaView>
  );
}
