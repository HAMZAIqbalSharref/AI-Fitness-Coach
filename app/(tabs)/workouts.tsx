import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Search } from "lucide-react-native";
import { router } from "expo-router";

import { searchExercises } from "@/services/exerciseApi";

const WORKOUT_CATEGORIES = [
  { id: 1, name: "Strength", icon: "💪", count: 12 },
  { id: 2, name: "Cardio", icon: "🏃", count: 8 },
  { id: 3, name: "Hypertrophy", icon: "🏋️", count: 15 },
  { id: 4, name: "Power", icon: "⚡", count: 6 }
];

const WEEKLY_SPLIT = [
  "Push",
  "Pull",
  "Legs",
  "Rest",
  "Push",
  "Pull",
  "Legs"
];

export default function WorkoutsScreen() {
  const [search, setSearch] = useState("");

  const [exercises, setExercises] =
    useState<any[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      if (search.length < 2) {
        setExercises([]);
        return;
      }

      const data =
        await searchExercises(search);

      setExercises(data);
    };

    fetchExercises();
  }, [search]);

  return (
    <ScrollView
      className="flex-1 bg-dark-300"
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-12 pb-24">

        {/* Header */}
        <Text className="text-2xl font-bold text-white mb-6">
          Workouts
        </Text>

        {/* Search */}
        <View className="bg-dark-200 rounded-2xl px-4 py-3 flex-row items-center mb-6">

          <Search size={20} color="#777" />

          <TextInput
            placeholder="Search exercises..."
            placeholderTextColor="#777"
            value={search}
            onChangeText={setSearch}
            className="flex-1 text-white ml-3 text-base"
          />
        </View>

        {/* Weekly Split */}
        <Text className="text-white text-lg font-semibold mb-4">
          Weekly Split
        </Text>

        <View className="flex-row justify-between mb-6">
          {WEEKLY_SPLIT.map((day, index) => {
            const labels = [
              "M",
              "T",
              "W",
              "T",
              "F",
              "S",
              "S"
            ];

            const isRest = day === "Rest";

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                className="items-center"
              >
                <Text className="text-gray-400 text-xs mb-2">
                  {labels[index]}
                </Text>

                <View
                  className={`w-10 h-10 rounded-full items-center justify-center ${
                    isRest
                      ? "bg-dark-100"
                      : "bg-primary-600"
                  }`}
                >
                  <Text className="text-white font-bold">
                    {isRest ? "R" : day[0]}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Search Results */}
        {search.length > 1 && (
          <Text className="text-white text-lg font-semibold mb-3">
            Exercise Results
          </Text>
        )}

        {exercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            activeOpacity={0.9}
            onPress={() =>
              router.push(
                `/workout/${exercise.id}`
              )
            }
            className="bg-dark-200 rounded-3xl p-4 mb-4"
          >
            <Text className="text-white text-xl font-bold capitalize">
              {exercise.name}
            </Text>

            <Text className="text-gray-400 mt-2 capitalize">
              Target: {exercise.target}
            </Text>

            <Text className="text-gray-400 capitalize">
              Equipment: {exercise.equipment}
            </Text>

            <Text className="text-primary-600 mt-3 capitalize">
              {exercise.bodyPart}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Empty State */}
        {search.length > 1 &&
          exercises.length === 0 && (
            <Text className="text-gray-500 text-center mt-4">
              No exercises found
            </Text>
          )}

        {/* Categories */}
        <Text className="text-white text-lg font-semibold mt-2 mb-3">
          Categories
        </Text>

        {/* Top Row */}
        <View className="flex-row justify-between mb-4">
          {WORKOUT_CATEGORIES.slice(0, 2).map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className="bg-dark-200 rounded-3xl p-5 w-[48%] items-center"
            >
              <Text className="text-3xl mb-2">
                {cat.icon}
              </Text>

              <Text className="text-white text-lg font-bold">
                {cat.name}
              </Text>

              <Text className="text-gray-400 text-xs mt-1">
                {cat.count} workouts
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Row */}
        <View className="flex-row justify-between">
          {WORKOUT_CATEGORIES.slice(2, 4).map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className="bg-dark-200 rounded-3xl p-5 w-[48%] items-center"
            >
              <Text className="text-3xl mb-2">
                {cat.icon}
              </Text>

              <Text className="text-white text-lg font-bold">
                {cat.name}
              </Text>

              <Text className="text-gray-400 text-xs mt-1">
                {cat.count} workouts
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="h-10" />

      </View>
    </ScrollView>
  );
}