import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

export default function SubscriptionDetail() {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Subscription Details : {id}</Text>
      <Link href="/" className="text-body text-primary"> GO Back</Link>
    </View>
  )
}
