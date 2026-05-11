import React from "react";
import { View, Text, ViewStyle } from "react-native";

interface ProgressCardProps {
  title: string;
  current: number;
  goal: number;
  unit?: string;
  color?: string;
  style?: ViewStyle;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  current,
  goal,
  unit = "",
  color = "bg-primary-600",
  style
}) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <View className="bg-dark-200 rounded-xl p-4" style={style}>
      <View className="flex-row justify-between mb-1">
        <Text className="text-gray-400">{title}</Text>
        <Text className="text-white">
          {current}/{goal} {unit}
        </Text>
      </View>
      <View className="h-2 bg-dark-100 rounded-full overflow-hidden">
        <View
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </View>
    </View>
  );
};