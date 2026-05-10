import "../global.css";
import { Stack } from "expo-router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/services/query-client";
import { useAuthStore } from "../src/store/auth-store";
import { LoadingScreen } from "../src/components/ui";

export default function RootLayout() {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="index" />
            <Stack.Screen name="signin" />
            <Stack.Screen name="signup" />
          </>
        ) : (
          <Stack.Screen name="home" />
        )}
      </Stack>
    </QueryClientProvider>
  );
}