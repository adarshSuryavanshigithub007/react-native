import ListHeading from "@/components/ListHeading";
import UpcomingSubscription from "@/components/UpcomingSubscription";
import { HOME_BALANCE, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import { images } from "@/constants/image";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 bg-background p-5"
    >
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
      </View>
      <View className="home-balance-card">
        <View className="home-balance-label">
          <Text className="home-balance-label-text">Balance</Text>
        </View>
        <View className="home-balance-row">
          <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount, "USD")}</Text>
          <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format("DD MMM YYYY")}</Text>
        </View>
      </View>
      <View>
        <ListHeading title="Upcoming" />
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <UpcomingSubscription {...item} />
          )}
          ListEmptyComponent={<Text className="text-center text-gray-500">No upcoming subscriptions</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
