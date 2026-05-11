import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";

const QUICK_ACTIONS = [
  { id: 1, title: "Meal Plan", icon: "📅", color: "bg-primary-600" },
  { id: 2, title: "Macros", icon: "📊", color: "bg-secondary-600" },
  { id: 3, title: "Recipes", icon: "📖", color: "bg-blue-600" }
];

const MEAL_SUGGESTIONS = [
  "High protein breakfast ideas",
  "Post-workout meal suggestions",
  "Low carb dinner options"
];

export default function MealsScreen() {
  const [message, setMessage] = useState("");

  return (
    <View className="flex-1 bg-dark-300">
      <View className="px-6 pt-12 flex-1">
        <Text className="text-2xl font-bold text-white mb-4">Meal Planning</Text>

        <ScrollView className="flex-1 mb-4" showsVerticalScrollIndicator={false}>
          <Text className="text-gray-400 mb-2">Ask for meal ideas:</Text>
          <View className="flex-row flex-wrap mb-4">
            {MEAL_SUGGESTIONS.map((prompt, i) => (
              <TouchableOpacity key={i} className="bg-dark-200 rounded-full px-3 py-2 mr-2 mb-2">
                <Text className="text-gray-300 text-xs">{prompt}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="flex-row flex-wrap mb-4">
            {QUICK_ACTIONS.map((action) => (
              <TouchableOpacity
                key={action.id}
                className={`${action.color} rounded-xl p-3 w-[45%] mr-2 mb-2 items-center`}
              >
                <Text className="text-2xl mb-1">{action.icon}</Text>
                <Text className="text-white text-xs text-center">{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View className="flex-row items-center bg-dark-200 rounded-xl p-3">
          <TextInput
            className="flex-1 text-white mr-3"
            placeholder="Ask for meal suggestions..."
            placeholderTextColor="#6b7280"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity className="w-10 h-10 bg-primary-600 rounded-full items-center justify-center">
            <Text className="text-white">➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}