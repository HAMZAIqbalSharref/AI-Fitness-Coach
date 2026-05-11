import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WORKOUT_CATEGORIES = [
  { id: 1, name: "Strength", icon: "💪", count: 12 },
  { id: 2, name: "Cardio", icon: "🏃", count: 8 },
  { id: 3, name: "Hypertrophy", icon: "🏋️", count: 15 },
  { id: 4, name: "Power", icon: "⚡", count: 6 }
];

const FEATURED_WORKOUTS = [
  { id: 1, title: "Push Pull Legs", duration: "60 min", level: "Intermediate", muscleGroups: ["Chest", "Back", "Legs"] },
  { id: 2, title: "Full Body Burn", duration: "45 min", level: "Advanced", muscleGroups: ["Full Body"] },
  { id: 3, title: "Core Crusher", duration: "30 min", level: "Beginner", muscleGroups: ["Core", "Abs"] }
];

const WEEKLY_SPLIT = ["Push", "Pull", "Legs", "Rest", "Push", "Pull", "Legs"];

export default function WorkoutsScreen() {
  return (
    <ScrollView className="flex-1 bg-dark-300" showsVerticalScrollIndicator={false}>
      <View className="px-6 pt-12 pb-32">
        <Text className="text-2xl font-bold text-white mb-6">Workouts</Text>

        {/* Categories */}
        <View className="flex-row flex-wrap mb-6">
          {WORKOUT_CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className="bg-dark-200 rounded-xl p-4 w-[45%] mr-2 mb-3 items-center"
            >
              <Text className="text-2xl mb-2">{cat.icon}</Text>
              <Text className="text-white font-medium">{cat.name}</Text>
              <Text className="text-gray-400 text-xs">{cat.count} workouts</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Workouts */}
        <Text className="text-white text-lg font-semibold mb-3">Featured Workouts</Text>
        {FEATURED_WORKOUTS.map((workout) => (
          <View key={workout.id} className="bg-dark-200 rounded-xl p-4 mb-3">
            <View className="flex-row justify-between items-start mb-2">
              <Text className="text-white text-lg font-bold">{workout.title}</Text>
              <Text className="text-primary-600 bg-primary-600/20 px-2 py-1 rounded">
                {workout.duration}
              </Text>
            </View>
            <View className="flex-row flex-wrap mb-3">
              {workout.muscleGroups.map((group, i) => (
                <View key={i} className="bg-dark-100 rounded-full px-2 py-1 mr-1 mb-1">
                  <Text className="text-gray-300 text-xs">{group}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity className="bg-primary-600 rounded-lg py-2 items-center">
              <Text className="text-white font-medium">Start Workout</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Weekly Split */}
        <Text className="text-white text-lg font-semibold mb-3">Weekly Split</Text>
        <View className="flex-row justify-between mb-8">
          {WEEKLY_SPLIT.map((day, index) => (
            <View key={index} className="items-center">
              <Text className="text-gray-400 text-xs mb-1">
                {["M", "T", "W", "T", "F", "S", "S"][index]}
              </Text>
              <View className={`w-10 h-10 rounded-full items-center justify-center ${
                day === "Rest" ? "bg-dark-100" : "bg-primary-600"
              }`}>
                <Text className="text-white text-xs font-bold">
                  {day === "Rest" ? "R" : day[0]}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}