import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFF8F0",
        },
        headerTitleStyle: {
          fontFamily: "Roboto_700Bold",
          color: "#C94264",
        },
      }}
    />
  );
}
