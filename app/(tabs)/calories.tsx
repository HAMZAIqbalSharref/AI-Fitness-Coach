import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const NUTRITION_DATA = {
  calories: { current: 1842, goal: 2500 },
  protein: { current: 124, goal: 150 },
  carbs: { current: 180, goal: 300 },
  fats: { current: 45, goal: 80 }
};

const WATER_DATA = { current: 6, goal: 8 };

const MEALS = [
  { id: 1, name: "Breakfast", time: "8:00 AM", calories: 450 },
  { id: 2, name: "Lunch", time: "1:00 PM", calories: 750 },
  { id: 3, name: "Dinner", time: "7:30 PM", calories: 642 }
];

export default function CaloriesScreen() {
  const renderProgressBar = (current: number, goal: number, color: string = "bg-primary-600") => {
    const percentage = Math.min((current / goal) * 100, 100);
    return (
      <View className="h-2 bg-dark-100 rounded-full overflow-hidden">
        <View className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }} />
      </View>
    );
  };

  return (
    <ScrollView className="flex-1 bg-dark-300" showsVerticalScrollIndicator={false}>
      <View className="px-6 pt-12 pb-24">
        <Text className="text-2xl font-bold text-white mb-6">Calories</Text>

        <View className="bg-dark-200 rounded-xl p-5 mb-6">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-400">Calories</Text>
            <Text className="text-white font-bold">
              {NUTRITION_DATA.calories.current}/{NUTRITION_DATA.calories.goal} kcal
            </Text>
          </View>
          {renderProgressBar(NUTRITION_DATA.calories.current, NUTRITION_DATA.calories.goal)}
        </View>

        <View className="flex-row mb-6">
          <View className="flex-1 bg-dark-200 rounded-xl p-4 mr-2">
            <Text className="text-gray-400 text-sm">Protein</Text>
            <Text className="text-white text-xl font-bold">
              {NUTRITION_DATA.protein.current}/{NUTRITION_DATA.protein.goal}g
            </Text>
            {renderProgressBar(NUTRITION_DATA.protein.current, NUTRITION_DATA.protein.goal, "bg-secondary-600")}
          </View>
          <View className="flex-1 bg-dark-200 rounded-xl p-4 ml-2">
            <Text className="text-gray-400 text-sm">Carbs</Text>
            <Text className="text-white text-xl font-bold">
              {NUTRITION_DATA.carbs.current}/{NUTRITION_DATA.carbs.goal}g
            </Text>
            {renderProgressBar(NUTRITION_DATA.carbs.current, NUTRITION_DATA.carbs.goal, "bg-yellow-500")}
          </View>
        </View>

        <View className="bg-dark-200 rounded-xl p-5 mb-6">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-400">Water Intake</Text>
            <Text className="text-white">{WATER_DATA.current}/{WATER_DATA.goal} glasses</Text>
          </View>
          <View className="flex-row">
            {Array.from({ length: WATER_DATA.goal }).map((_, i) => (
              <View
                key={i}
                className={`w-8 h-8 rounded-lg mr-2 items-center justify-center ${
                  i < WATER_DATA.current ? "bg-blue-500" : "bg-dark-100"
                }`}
              >
                <Text className="text-white text-xs">💧</Text>
              </View>
            ))}
          </View>
        </View>

        <Text className="text-white text-lg font-semibold mb-3">Today's Meals</Text>
        {MEALS.map((meal) => (
          <View key={meal.id} className="bg-dark-200 rounded-xl p-4 mb-3 flex-row justify-between items-center">
            <View>
              <Text className="text-white font-bold text-lg">{meal.name}</Text>
              <Text className="text-gray-400">{meal.time}</Text>
            </View>
            <Text className="text-primary-600 font-bold">{meal.calories} kcal</Text>
          </View>
        ))}
        
        <TouchableOpacity className="bg-primary-600 rounded-xl p-4 items-center mt-2">
          <Text className="text-white font-bold text-lg">+ Add Meal</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
  );
}
