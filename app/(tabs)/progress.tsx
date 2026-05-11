import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const PROGRESS_DATA = {
  weight: { current: 72.5, goal: 75, unit: "kg" },
  streak: 7,
  consistency: 85
};

const PERSONAL_RECORDS = [
  { id: 1, exercise: "Bench Press", weight: "100 kg", date: "2 weeks ago" },
  { id: 2, exercise: "Squat", weight: "140 kg", date: "3 weeks ago" },
  { id: 3, exercise: "Deadlift", weight: "160 kg", date: "1 month ago" }
];

const ACHIEVEMENTS = [
  { id: 1, title: "Week Streak", icon: "🔥", unlocked: true },
  { id: 2, title: "10 Workouts", icon: "💪", unlocked: true },
  { id: 3, title: "50 Workouts", icon: "🏆", unlocked: false }
];

export default function ProgressScreen() {
  return (
    <ScrollView className="flex-1 bg-dark-300" showsVerticalScrollIndicator={false}>
      <View className="px-6 pt-12 pb-32">
        <Text className="text-2xl font-bold text-white mb-6">Progress</Text>

        {/* Weight Tracking */}
        <View className="bg-dark-200 rounded-xl p-5 mb-6">
          <Text className="text-white text-lg font-semibold mb-4">Weight Progress</Text>
          <View className="items-center mb-4">
            <Text className="text-primary-600 text-5xl font-bold">
              {PROGRESS_DATA.weight.current}
            </Text>
            <Text className="text-gray-400">kg</Text>
          </View>
          <View className="h-3 bg-dark-100 rounded-full overflow-hidden mb-2">
            <View className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 w-2/3 rounded-full" />
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Start: 70 kg</Text>
            <Text className="text-gray-400">Goal: {PROGRESS_DATA.weight.goal} kg</Text>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row mb-6">
          <View className="flex-1 bg-dark-200 rounded-xl p-4 mr-2 items-center">
            <Text className="text-primary-600 text-3xl font-bold">{PROGRESS_DATA.streak}</Text>
            <Text className="text-gray-400">Day Streak</Text>
          </View>
          <View className="flex-1 bg-dark-200 rounded-xl p-4 ml-2 items-center">
            <Text className="text-white text-3xl font-bold">{PROGRESS_DATA.consistency}%</Text>
            <Text className="text-gray-400">Consistency</Text>
          </View>
        </View>

        {/* Personal Records */}
        <Text className="text-white text-lg font-semibold mb-3">Personal Records</Text>
        {PERSONAL_RECORDS.map((pr) => (
          <View key={pr.id} className="bg-dark-200 rounded-xl p-4 mb-3 flex-row justify-between items-center">
            <View>
              <Text className="text-white font-bold text-lg">{pr.exercise}</Text>
              <Text className="text-gray-400">{pr.date}</Text>
            </View>
            <Text className="text-primary-600 font-bold text-lg">{pr.weight}</Text>
          </View>
        ))}

        {/* Achievements */}
        <Text className="text-white text-lg font-semibold mb-3">Achievements</Text>
        <View className="flex-row flex-wrap">
          {ACHIEVEMENTS.map((ach) => (
            <View
              key={ach.id}
              className={`rounded-xl p-4 w-[30%] mr-2 mb-3 items-center ${
                ach.unlocked ? "bg-primary-600/20" : "bg-dark-200 opacity-50"
              }`}
            >
              <Text className="text-2xl mb-1">{ach.icon}</Text>
              <Text className={`text-xs text-center ${ach.unlocked ? "text-white" : "text-gray-500"}`}>
                {ach.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}