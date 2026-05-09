import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { useAuthStore } from "../../store/auth-store";
import { LinearGradient } from "expo-linear-gradient";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

export const HomeScreen: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <StyledScrollView className="flex-1 bg-dark-300">
      <StyledView className="px-6 pt-12 pb-6">
        <StyledView className="flex-row justify-between items-center mb-8">
          <StyledView>
            <StyledText className="text-gray-400">Welcome back,</StyledText>
            <StyledText className="text-2xl font-bold text-white">
              {user?.full_name || "Athlete"}
            </StyledText>
          </StyledView>
          <TouchableOpacity
            className="w-12 h-12 bg-primary-600 rounded-full items-center justify-center"
            onPress={logout}
          >
            <StyledText className="text-xl">👤</StyledText>
          </TouchableOpacity>
        </StyledView>

        <LinearGradient
          colors={["#f97316", "#ea580c"]}
          start={[0, 0]}
          end={[1, 1]}
          className="rounded-2xl p-6 mb-6"
        >
          <StyledText className="text-white text-lg font-medium mb-2">
            Today's Workout
          </StyledText>
          <StyledText className="text-white text-3xl font-bold mb-4">
            Upper Body Strength
          </StyledText>
          <StyledView className="flex-row items-center">
            <StyledView className="bg-white/20 rounded-full px-3 py-1 mr-3">
              <StyledText className="text-white">45 min</StyledText>
            </StyledView>
            <StyledView className="bg-white/20 rounded-full px-3 py-1">
              <StyledText className="text-white">Intermediate</StyledText>
            </StyledView>
          </StyledView>
        </LinearGradient>

        <StyledView className="flex-row justify-between mb-4">
          <StyledText className="text-xl font-bold text-white">
            Quick Stats
          </StyledText>
          <StyledTouchableOpacity>
            <StyledText className="text-primary-600">See All</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        <StyledView className="flex-row mb-6">
          <StyledView className="flex-1 bg-dark-200 rounded-xl p-4 mr-2">
            <StyledText className="text-gray-400 text-sm">Calories</StyledText>
            <StyledText className="text-2xl font-bold text-white mt-1">
              1,842
            </StyledText>
            <StyledView className="flex-row items-center mt-2">
              <StyledView className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              <StyledText className="text-green-500 text-xs">+12%</StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="flex-1 bg-dark-200 rounded-xl p-4 ml-2">
            <StyledText className="text-gray-400 text-sm">Workouts</StyledText>
            <StyledText className="text-2xl font-bold text-white mt-1">
              18
            </StyledText>
            <StyledText className="text-gray-400 text-xs mt-2">
              This week
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};