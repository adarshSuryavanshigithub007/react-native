import { Image, View } from "react-native";
import { Tabs } from "expo-router";
import clsx from "clsx";
import { tabs } from "@/constants/data";
import { colors,components } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const tabBar = components.tabBar;
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarShowLabel: false, 
      tabBarStyle: {
        position: 'absolute',
        bottom: Math.max(insets.bottom, tabBar.horizontalInset),
        height:tabBar.height,
        marginHorizontal: tabBar.horizontalInset,
        borderRadius: tabBar.radius,
        backgroundColor: colors.primary,
        overflow: 'hidden',
        borderTopWidth: 0,
        elevation: 0,
        paddingHorizontal: tabBar.horizontalInset,
        paddingVertical: tabBar.itemPaddingVertical,
      },
      tabBarItemStyle: {
        paddingVertical:tabBar.height/2-tabBar.iconFrame/1.6,
         },
      tabBarIconStyle: {
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }}>
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

