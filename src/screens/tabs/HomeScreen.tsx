import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useAuthStore } from "../../store/auth-store";
import { LinearGradient } from "expo-linear-gradient";

export const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <ScrollView className="flex-1 bg-dark-300">
      <View className="px-6 pt-12 pb-6">
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-gray-400">Welcome back,</Text>
            <Text className="text-2xl font-bold text-white">
              {user?.full_name || "Athlete"}
            </Text>
          </View>
          <TouchableOpacity
            className="w-12 h-12 bg-primary-600 rounded-full items-center justify-center"
            onPress={logout}
          >
            <Text className="text-xl">👤</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={["#f97316", "#ea580c"]}
          start={[0, 0]}
          end={[1, 1]}
          className="rounded-2xl p-6 mb-6"
        >
          <Text className="text-white text-lg font-medium mb-2">
            Today's Workout
          </Text>
          <Text className="text-white text-3xl font-bold mb-4">
            Upper Body Strength
          </Text>
          <View className="flex-row items-center">
            <View className="bg-white/20 rounded-full px-3 py-1 mr-3">
              <Text className="text-white">45 min</Text>
            </View>
            <View className="bg-white/20 rounded-full px-3 py-1">
              <Text className="text-white">Intermediate</Text>
            </View>
          </View>
        </LinearGradient>

        <View className="flex-row justify-between mb-4">
          <Text className="text-xl font-bold text-white">
            Quick Stats
          </Text>
          <TouchableOpacity>
            <Text className="text-primary-600">See All</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row mb-6">
          <View className="flex-1 bg-dark-200 rounded-xl p-4 mr-2">
            <Text className="text-gray-400 text-sm">Calories</Text>
            <Text className="text-2xl font-bold text-white mt-1">
              1,842
            </Text>
            <View className="flex-row items-center mt-2">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              <Text className="text-green-500 text-xs">+12%</Text>
            </View>
          </View>

          <View className="flex-1 bg-dark-200 rounded-xl p-4 ml-2">
            <Text className="text-gray-400 text-sm">Workouts</Text>
            <Text className="text-2xl font-bold text-white mt-1">
              18
            </Text>
            <Text className="text-gray-400 text-xs mt-2">
              This week
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};