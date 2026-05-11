import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useAuthStore } from "../../src/store/auth-store";
import { LinearGradient } from "expo-linear-gradient";

const WORKOUT_DATA = {
  title: "Upper Body Strength",
  duration: "45 min",
  level: "Intermediate",
  muscleGroups: ["Chest", "Back", "Shoulders"]
};

const WEEKLY_PROGRESS = {
  streak: 7,
  workouts: 18
};

const RECENT_ACTIVITY = {
  lastWorkout: "Push Pull Legs - 2 days ago",
  achievement: "Week Streak 🔥"
};

export default function DashboardScreen() {
  const { user } = useAuthStore();

  return (
    <ScrollView className="flex-1 bg-dark-300" showsVerticalScrollIndicator={false}>
      <View className="px-6 pt-12 pb-32">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-gray-400 text-base">Welcome back,</Text>
            <Text className="text-3xl font-bold text-white mt-1">
              {user?.full_name || "Athlete"}
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              Ready to crush your goals today?
            </Text>
          </View>
          <View className="w-14 h-14 bg-primary-600 rounded-full items-center justify-center">
            <Text className="text-2xl">👤</Text>
          </View>
        </View>

        {/* Today's Workout Summary */}
        <LinearGradient
          colors={["#f97316", "#ea580c"]}
          start={[0, 0]}
          end={[1, 1]}
          className="rounded-2xl p-5 mb-6"
        >
          <Text className="text-white text-lg font-medium mb-2">Today's Workout</Text>
          <Text className="text-white text-2xl font-bold">{WORKOUT_DATA.title}</Text>
          <View className="flex-row mt-3">
            <View className="bg-white/20 rounded-full px-3 py-1 mr-2">
              <Text className="text-white">{WORKOUT_DATA.duration}</Text>
            </View>
            <View className="bg-white/20 rounded-full px-3 py-1">
              <Text className="text-white">{WORKOUT_DATA.level}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Weekly Progress Preview */}
        <View className="bg-dark-200 rounded-2xl p-5 mb-6">
          <Text className="text-white text-lg font-semibold mb-4">This Week</Text>
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-primary-600 text-2xl font-bold">{WEEKLY_PROGRESS.streak}</Text>
              <Text className="text-gray-400 text-xs">Day Streak</Text>
            </View>
            <View className="items-center">
              <Text className="text-white text-2xl font-bold">{WEEKLY_PROGRESS.workouts}</Text>
              <Text className="text-gray-400 text-xs">Workouts</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="bg-dark-200 rounded-2xl p-5 mb-8">
          <Text className="text-white text-lg font-semibold mb-4">Recent Activity</Text>
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-400">Last Workout</Text>
            <Text className="text-white">{RECENT_ACTIVITY.lastWorkout}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-400">Achievement</Text>
            <Text className="text-white">{RECENT_ACTIVITY.achievement}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}