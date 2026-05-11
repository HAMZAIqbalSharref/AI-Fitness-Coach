import { Redirect } from "expo-router";
import { useAuthStore } from "../src/store/auth-store";

export default function Index() {
  const { user } = useAuthStore();

  if (user) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/signin" />;
}