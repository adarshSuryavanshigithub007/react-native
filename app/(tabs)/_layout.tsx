import { Image, View } from "react-native";
import { Tabs } from "expo-router";
import clsx from "clsx";
import { tabs } from "@/constants/data";

const TabsLayout = () => {
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((data) => (
        <Tabs.Screen
          key={data.name}
          name={data.name}
          options={{
            title: data.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={data.icon} />
            ),
          }}
        />
      ))}
      <Tabs.Screen
        name="subscriptions/[id]"
        options={{ href: null, title: "Subscription" }}
      />
    </Tabs>
  );
};

export default TabsLayout;

