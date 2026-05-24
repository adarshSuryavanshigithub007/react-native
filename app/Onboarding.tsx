import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-foreground text-center text-2xl font-bold"> shree ganeshaya namaha WELCOME TO ONBOARDING</Text>
      {/* <Link href="/index" className="text-foreground text-center mt-4 rounded-md bg-primary p-2 text-white p-4">Onboarding</Link> */}
    </SafeAreaView>
  )
}

export default Onboarding