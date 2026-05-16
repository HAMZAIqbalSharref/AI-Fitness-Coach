import { Tabs } from "expo-router";

import {
  Home,
  Dumbbell,
  Flame,
  BarChart3,
} from "lucide-react-native";

import {
  View,
  Text,
  Animated,
} from "react-native";

import { useEffect, useRef } from "react";

function TabButton({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  const scale = useRef(
    new Animated.Value(focused ? 1 : 0.95)
  ).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1 : 0.95,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        width: 72,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {focused ? (
        <View
          className="
            w-[50px]
            h-[50px]
            rounded-full
            bg-primary-600
            items-center
            justify-center
          "
        >
          {icon}
        </View>
      ) : (
        <View
          className="
            w-[44px]
            h-[44px]
            rounded-full
            items-center
            justify-center
          "
        >
          {icon}
        </View>
      )}

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        className={`
          text-[11px]
          font-semibold
          mt-1
          ${
            focused
              ? "text-primary-600"
              : "text-gray-500"
          }
        `}
      >
        {label}
      </Text>
    </Animated.View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
        tabBarHideOnKeyboard: true,

        animation: "shift",

       tabBarStyle: {
          position: "absolute",

          left: 0,
          right: 0,
          bottom: 0,

          height: 88,


          backgroundColor: "#0b0b0b",

          borderTopWidth: 0,

          elevation: 0,

          shadowOpacity: 0,

        
          overflow: "hidden",

          paddingTop: 8,

          paddingBottom: 8, 
},

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              label="Home"
              icon={
                <Home
                  size={24}
                  color={
                    focused ? "white" : "#777"
                  }
                />
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="workouts"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              label="Workout"
              icon={
                <Dumbbell
                  size={24}
                  color={
                    focused ? "white" : "#777"
                  }
                />
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calories"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              label="Calories"
              icon={
                <Flame
                  size={24}
                  color={
                    focused ? "white" : "#777"
                  }
                />
              }
            />
          ),
        }}
      />

      <Tabs.Screen
        name="progress"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
              focused={focused}
              label="Progress"
              icon={
                <BarChart3
                  size={24}
                  color={
                    focused ? "white" : "#777"
                  }
                />
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}