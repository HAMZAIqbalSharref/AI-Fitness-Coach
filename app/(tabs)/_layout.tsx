import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        animation: "shift",

        sceneStyle: {
          backgroundColor: "#000",
        },

        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 20,

          height: 72,

          backgroundColor: "#111111",

          borderRadius: 28,

          borderTopWidth: 0,

          elevation: 0,

          paddingTop: 10,
          paddingBottom: 10,

          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 20,
          shadowOffset: {
            width: 0,
            height: 10,
          },
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 2,
        },

        tabBarActiveTintColor: "#ff6b00",
        tabBarInactiveTintColor: "#7a7a7a",

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,107,0,0.15)"
                  : "transparent",

                padding: 10,
                borderRadius: 16,
              }}
            >
              <Ionicons name="home" size={22} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workout",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,107,0,0.15)"
                  : "transparent",

                padding: 10,
                borderRadius: 16,
              }}
            >
              <Ionicons name="barbell" size={22} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="calories"
        options={{
          title: "Calories",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,107,0,0.15)"
                  : "transparent",

                padding: 10,
                borderRadius: 16,
              }}
            >
              <Ionicons name="flame" size={22} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,107,0,0.15)"
                  : "transparent",

                padding: 10,
                borderRadius: 16,
              }}
            >
              <Ionicons name="stats-chart" size={22} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="meals"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}