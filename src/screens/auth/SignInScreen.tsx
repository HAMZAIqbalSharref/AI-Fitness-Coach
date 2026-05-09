import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Button, Input } from "../../components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "../../services/supabase";
import { useAuthStore } from "../../store/auth-store";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

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
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (error) throw error;

      if (authData.user) {
        login({
          id: authData.user.id,
          email: authData.user.email || "",
          full_name: authData.user.user_metadata?.full_name,
          avatar_url: authData.user.user_metadata?.avatar_url,
          created_at: authData.user.created_at
        });
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return (
    <StyledView className="flex-1 bg-dark-300 px-6 justify-center">
      <StyledView className="items-center mb-10">
        <StyledView className="w-20 h-20 bg-primary-600 rounded-2xl items-center justify-center mb-4">
          <StyledText className="text-3xl">💪</StyledText>
        </StyledView>
        <StyledText className="text-3xl font-bold text-white">
          Welcome Back
        </StyledText>
        <StyledText className="text-gray-400 mt-2">
          Sign in to continue your fitness journey
        </StyledText>
      </StyledView>

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

      <StyledTouchableOpacity className="self-end mb-6">
        <StyledText className="text-primary-600 font-medium">
          Forgot Password?
        </StyledText>
      </StyledTouchableOpacity>

      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
      />

      <StyledView className="flex-row justify-center mt-8">
        <StyledText className="text-gray-400">
          Don't have an account?{" "}
        </StyledText>
        <StyledTouchableOpacity onPress={() => router.push("/(auth)/signup")}>
          <StyledText className="text-primary-600 font-semibold">
            Sign Up
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};