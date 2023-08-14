import { useTheme } from "@rneui/themed";
import { Stack } from "expo-router/stack";
import { theme as custom } from "@/constants/theme";

export default function NoteLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontFamily: custom.fonts.primaryBold,
        },
      }}
    />
  );
}
