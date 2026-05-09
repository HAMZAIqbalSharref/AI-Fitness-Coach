import "../global.css";
import { Stack } from "expo-router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/services/query-client";
import { useAuthStore } from "../src/store/auth-store";
import { LoadingScreen } from "../src/components/ui";
import { useEffect } from "react";
import { supabase } from "../src/services/supabase";


export default function RootLayout() {
  const { user, login, logout, isLoading, setLoading } = useAuthStore();

  useEffect(() => {
    setLoading(true);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          login({
            id: session.user.id,
            email: session.user.email || "",
            full_name: session.user.user_metadata?.full_name,
            avatar_url: session.user.user_metadata?.avatar_url,
            created_at: session.user.created_at
          });
        } else {
          logout();
        }
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        login({
          id: session.user.id,
          email: session.user.email || "",
          full_name: session.user.user_metadata?.full_name,
          avatar_url: session.user.user_metadata?.avatar_url,
          created_at: session.user.created_at
        });
      }
      setLoading(false);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="index" options={{ animation: "none" }} />
            <Stack.Screen name="signin" options={{ animation: "none" }} />
            <Stack.Screen name="signup" options={{ animation: "none" }} />
          </>
        ) : (
          <Stack.Screen name="home" options={{ animation: "none" }} />
        )}
      </Stack>
    </QueryClientProvider>
  );
}