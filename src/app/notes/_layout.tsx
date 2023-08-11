import { useTheme } from "@rneui/themed";
import { Stack } from "expo-router/stack";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.primary,
      }}
    />
  );
}
