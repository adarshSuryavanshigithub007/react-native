import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

export default function UpcomingSubscription({
    icon,
    name,
    price,
    currency = "USD",
    daysLeft,
}: UpcomingSubscription) {
    return (
    <View className="upcoming-card">
       <View className="upcoming-row">
       <Image source={icon} className="upcoming-icon" />
        <View >
            <Text className="upcoming-price">{formatCurrency(price, currency)}</Text>
            <Text className="upcoming-meta" numberOfLines={1}>{daysLeft > 1 ? `${daysLeft} days left` : `Today is the day to renew`}</Text>
        </View>
       </View>
       <Text className="upcoming-name" numberOfLines={2}>{name}</Text>

    </View>
    )
}
