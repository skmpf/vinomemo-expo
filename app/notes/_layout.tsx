import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFF8F0",
        },
        headerTintColor: "#C94264",
      }}
    />
  );
}
