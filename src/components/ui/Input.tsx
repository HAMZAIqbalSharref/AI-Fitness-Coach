import React from "react";
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  ViewStyle
} from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  containerStyle,
  ...props
}) => {
  return (
    <StyledView className="w-full mb-4" style={containerStyle}>
      {label && (
        <StyledText className="text-gray-300 mb-2 font-medium">
          {label}
        </StyledText>
      )}
      <StyledTextInput
        className="bg-dark-200 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500"
        placeholderTextColor="#6b7280"
        {...props}
      />
      {error && (
        <StyledText className="text-red-500 text-sm mt-1">{error}</StyledText>
      )}
    </StyledView>
  );
};