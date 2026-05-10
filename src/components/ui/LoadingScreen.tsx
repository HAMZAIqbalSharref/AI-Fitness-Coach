import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

export const LoadingScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-dark-300 items-center justify-center">
      <ActivityIndicator size="large" color="#f97316" />
      <Text className="text-white mt-4 font-medium">Loading...</Text>
    </View>
  );
};