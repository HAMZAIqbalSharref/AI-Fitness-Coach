import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Button, Input } from "../../components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthStore } from "../../store/auth-store";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type SignInFormData = z.infer<typeof signInSchema>;

export const SignInScreen: React.FC = () => {
  const router = useRouter();
  const { login } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: SignInFormData) => {
  try {
    console.log("Fake sign in:", data);

    login({
      id: "temp-user",
      email: data.email,
      full_name: "Hamza",
      avatar_url: "",
      created_at: new Date().toISOString()
    });

    router.replace("/home");
  } catch (error) {
    console.error("Sign in error:", error);
  }
};
  return (
    <View className="flex-1 bg-dark-300 px-6 justify-center">
      <View className="items-center mb-10">
        <View className="w-20 h-20 bg-primary-600 rounded-2xl items-center justify-center mb-4">
          <Text className="text-3xl">💪</Text>
        </View>
        <Text className="text-3xl font-bold text-white">
          Welcome Back
        </Text>
        <Text className="text-gray-400 mt-2">
          Sign in to continue your fitness journey
        </Text>
      </View>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            placeholder="Enter your email"
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.password?.message}
          />
        )}
      />

      <TouchableOpacity className="self-end mb-6">
        <Text className="text-primary-600 font-medium">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
      />

      <View className="flex-row justify-center mt-8">
        <Text className="text-gray-400">
          Don't have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-primary-600 font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};