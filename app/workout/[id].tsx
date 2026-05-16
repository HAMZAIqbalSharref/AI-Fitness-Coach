import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const WORKOUTS: any = {
  "push-pull-legs": {
    title: "Push Pull Legs",
    duration: "60 min",
    difficulty: "Intermediate",

    description:
      "A classic bodybuilding split focused on building muscle and strength efficiently.",

    exercises: [
      {
        name: "Bench Press",
        sets: "4",
        reps: "8-12",

        how:
          "Lie flat on the bench, grip slightly wider than shoulders, lower slowly to chest, then press upward explosively.",
      },

      {
        name: "Pull Ups",
        sets: "4",
        reps: "10",

        how:
          "Hang from the bar and pull your chest upward until your chin passes the bar.",
      },

      {
        name: "Squats",
        sets: "4",
        reps: "8",

        how:
          "Keep chest upright, lower hips below knees, then drive upward through heels.",
      },
    ],
  },

  "full-body-burn": {
    title: "Full Body Burn",
    duration: "45 min",
    difficulty: "Advanced",

    description:
      "High intensity full body workout focused on conditioning and calorie burn.",

    exercises: [
      {
        name: "Burpees",
        sets: "4",
        reps: "15",

        how:
          "Drop into push-up position, perform push-up, then jump upward explosively.",
      },

      {
        name: "Mountain Climbers",
        sets: "3",
        reps: "30 sec",

        how:
          "Drive knees rapidly toward chest while maintaining plank position.",
      },
    ],
  },

  "core-crusher": {
    title: "Core Crusher",
    duration: "30 min",
    difficulty: "Beginner",

    description:
      "Focused core workout to improve abdominal strength and stability.",

    exercises: [
      {
        name: "Plank",
        sets: "3",
        reps: "45 sec",

        how:
          "Maintain a straight body line while keeping core fully engaged.",
      },

      {
        name: "Crunches",
        sets: "4",
        reps: "20",

        how:
          "Lift shoulders upward while squeezing abdominal muscles.",
      },
    ],
  },
};

export default function WorkoutDetailScreen() {
  const { id } = useLocalSearchParams();

  const workout = WORKOUTS[id as string];

  if (!workout) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-white text-xl">
          Workout not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <View className="px-6 pt-14 pb-24">

        {/* Title */}
        <Text className="text-white text-4xl font-bold mb-2">
          {workout.title}
        </Text>

        <Text className="text-gray-400 text-base leading-6 mb-6">
          {workout.description}
        </Text>

        {/* Info */}
        <View className="flex-row mb-8">

          <View className="bg-dark-200 px-4 py-2 rounded-full mr-3">
            <Text className="text-white">
              {workout.duration}
            </Text>
          </View>

          <View className="bg-primary-600/20 px-4 py-2 rounded-full">
            <Text className="text-primary-600 font-medium">
              {workout.difficulty}
            </Text>
          </View>

        </View>

        {/* Exercises */}
        <Text className="text-white text-2xl font-bold mb-5">
          Exercises
        </Text>

        {workout.exercises.map(
          (exercise: any, index: number) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              className="bg-dark-200 rounded-3xl p-5 mb-4"
            >
              <View className="flex-row justify-between items-center mb-3">

                <Text className="text-white text-xl font-bold">
                  {exercise.name}
                </Text>

                <Text className="text-primary-600 font-semibold">
                  {exercise.sets} x {exercise.reps}
                </Text>

              </View>

              <Text className="text-gray-400 leading-6">
                {exercise.how}
              </Text>

            </TouchableOpacity>
          )
        )}

      </View>
    </ScrollView>
  );
}