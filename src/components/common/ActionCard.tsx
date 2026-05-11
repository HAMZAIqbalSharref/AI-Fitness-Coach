import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";

interface ActionCardProps {
  title: string;
  icon: string;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  icon,
  color = "bg-primary-600",
  onPress,
  style
}) => {
  return (
    <TouchableOpacity
      className={`${color} rounded-xl p-4 w-[45%] items-center`}
      onPress={onPress}
      style={style}
    >
      <Text className="text-2xl mb-2">{icon}</Text>
      <Text className="text-white font-medium text-center">{title}</Text>
    </TouchableOpacity>
  );
};