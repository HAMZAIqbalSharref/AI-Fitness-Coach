import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Button, Input } from "../../components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";  
import { useAuthStore } from "../../store/auth-store";

const signUpSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"]
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpScreen: React.FC = () => {
  const router = useRouter();
  const { login } = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  });

  const onSubmit = async (data: SignUpFormData) => {
  try {
    console.log("Fake sign up:", data);

    login({
      id: "temp-user",
      email: data.email,
      full_name: data.full_name,
      avatar_url: "",
      created_at: new Date().toISOString()
    });

    router.replace("/home");
  } catch (error) {
    console.error("Sign up error:", error);
  }
};

  return (
    <View className="flex-1 bg-dark-300">
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mt-10 mb-8">
          <View className="w-20 h-20 bg-primary-600 rounded-2xl items-center justify-center mb-4">
            <Text className="text-3xl">💪</Text>
          </View>
          <Text className="text-3xl font-bold text-white">
            Create Account
          </Text>
          <Text className="text-gray-400 mt-2">
            Start your fitness journey today
          </Text>
        </View>

        <Controller
          control={control}
          name="full_name"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              autoCapitalize="words"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.full_name?.message}
            />
          )}
        />

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
              placeholder="Create a password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.confirm_password?.message}
            />
          )}
        />

        <View className="mt-4 mb-8">
          <Button
            title="Sign Up"
            onPress={handleSubmit(onSubmit)}
            loading={isSubmitting}
          />
        </View>

        <View className="flex-row justify-center mb-10">
          <Text className="text-gray-400">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text className="text-primary-600 font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};