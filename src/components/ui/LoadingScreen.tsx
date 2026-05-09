import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export const LoadingScreen: React.FC = () => {
  return (
    <StyledView className="flex-1 bg-dark-300 items-center justify-center">
      <ActivityIndicator size="large" color="#f97316" />
      <StyledText className="text-white mt-4 font-medium">Loading...</StyledText>
    </StyledView>
  );
};