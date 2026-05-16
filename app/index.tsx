import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { useAuthStore } from "../src/store/auth-store";
import { useAppStore } from "../src/store/app-store";

export default function Index() {
  const { user } = useAuthStore();

  const {
    hasSeenOnboarding,
    loadAppState,
  } = useAppStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await loadAppState();
      setLoading(false);
    };

    init();
  }, []);

  if (loading) return null;

  if (!hasSeenOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  if (user) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/signin" />;
}