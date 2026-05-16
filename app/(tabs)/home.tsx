import React from "react";
import { View, Text, ScrollView } from "react-native";

const completion = 69;

const weeklyStats = {
  streak: 7,
  workouts: 18,
};

const recentActivity = [
  {
    label: "Last Workout",
    value: "Push Pull Legs - 2 days ago",
  },
  {
    label: "Achievement",
    value: "Week Streak 🔥",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-12 pb-24">

        {/* Header */}
        <View className="flex-row justify-between items-start mb-8">

          <View>
            <Text className="text-gray-400 text-lg">
              Welcome back,
            </Text>

            <Text className="text-white text-4xl font-bold mt-1">
              Hamza
            </Text>

            <Text className="text-gray-500 text-base mt-1">
              Ready to crush your goals today?
            </Text>
          </View>

          <View className="w-16 h-16 rounded-full bg-primary-600 items-center justify-center">
            <Text className="text-3xl">
              👤
            </Text>
          </View>

        </View>

        {/* Main Dashboard Container */}
        <View className="pt-2">

          {/* App Name */}
          <View className="mb-8">
            <Text className="text-white text-5xl font-bold">
              Fitness
            </Text>

            <Text className="text-primary-600 text-2xl font-semibold -mt-1">
              mobile app
            </Text>
          </View>

          {/* Progress Circle */}
          <View className="items-center mb-8">

            <View className="w-48 h-48 rounded-full border-[12px] border-dark-100 items-center justify-center">
              
              <View className="absolute w-48 h-48 rounded-full border-[12px] border-primary-600 border-r-transparent border-b-transparent rotate-45" />

              <Text className="text-gray-400 text-base">
                TODAY
              </Text>

              <Text className="text-white text-5xl font-bold mt-1">
                {completion}%
              </Text>

              <Text className="text-gray-500 mt-1">
                completed
              </Text>
            </View>

          </View>

          {/* Progress Bars */}
          <View className="mb-8">

            {/* Workout */}
            <View className="mb-4">

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-400 text-sm">
                  Workout
                </Text>

                <Text className="text-gray-500 text-sm">
                  75/100
                </Text>
              </View>

              <View className="bg-dark-100 h-2 rounded-full overflow-hidden">
                <View className="bg-primary-600 h-full w-[75%] rounded-full" />
              </View>

            </View>

            {/* Calories */}
            <View className="mb-4">

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-400 text-sm">
                  Calories
                </Text>

                <Text className="text-gray-500 text-sm">
                  53/100
                </Text>
              </View>

              <View className="bg-dark-100 h-2 rounded-full overflow-hidden">
                <View className="bg-yellow-400 h-full w-[53%] rounded-full" />
              </View>

            </View>

            {/* Water */}
            <View>

              <View className="flex-row justify-between mb-2">
                <Text className="text-gray-400 text-sm">
                  Water Intake
                </Text>

                <Text className="text-gray-500 text-sm">
                  88/100
                </Text>
              </View>

              <View className="bg-dark-100 h-2 rounded-full overflow-hidden">
                <View className="bg-blue-400 h-full w-[88%] rounded-full" />
              </View>

            </View>

          </View>

          {/* Divider */}


          {/* Today's Workout */}
          <View className="mb-8">

            <Text className="text-white text-2xl font-bold mb-3">
              Today's Workout
            </Text>

            <Text className="text-primary-600 text-3xl font-bold mb-4">
              Upper Body Strength
            </Text>

            <View className="flex-row">

              <View className="bg-primary-600/20 px-4 py-2 rounded-full mr-3">
                <Text className="text-white text-sm">
                  45 min
                </Text>
              </View>

              <View className="bg-primary-600/20 px-4 py-2 rounded-full">
                <Text className="text-white text-sm">
                  Intermediate
                </Text>
              </View>

            </View>

          </View>

          {/* Divider */}

          {/* This Week */}
          <View className="mb-8">

            <Text className="text-white text-2xl font-bold mb-5">
              This Week
            </Text>

            <View className="flex-row justify-between">

              <View>
                <Text className="text-primary-600 text-4xl font-bold">
                  {weeklyStats.streak}
                </Text>

                <Text className="text-gray-500 text-base mt-1">
                  Day Streak
                </Text>
              </View>

              <View className="items-end">
                <Text className="text-white text-4xl font-bold">
                  {weeklyStats.workouts}
                </Text>

                <Text className="text-gray-500 text-base mt-1">
                  Workouts
                </Text>
              </View>

            </View>

          </View>

          {/* Divider */}      

          {/* Recent Activity */}
          <View>

            <Text className="text-white text-2xl font-bold mb-5">
              Recent Activity
            </Text>

            {recentActivity.map((item, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center mb-4"
              >
                <Text className="text-gray-500 text-base">
                  {item.label}
                </Text>

                <Text className="text-white text-base font-medium text-right flex-1 ml-4">
                  {item.value}
                </Text>
              </View>
            ))}

          </View>

        </View>

      </View>
  
    </ScrollView>
  );
}
