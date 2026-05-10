import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4"
  };
  const variantStyles = {
    primary: "bg-primary-600",
    secondary: "bg-secondary-600",
    outline: "border border-primary-600 bg-transparent"
  };

  return (
    <TouchableOpacity
      className={`rounded-lg items-center justify-center flex-row ${sizeStyles[size]} ${
        variantStyles[variant]
      } ${disabled ? "opacity-50" : ""}`}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading && (
        <ActivityIndicator
          color={variant === "outline" ? "#f97316" : "#ffffff"}
          className="mr-2"
        />
      )}
      <Text
        className={`font-semibold ${variant === "outline" ? "text-primary-600" : "text-white"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};