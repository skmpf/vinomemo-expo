import { Link } from "expo-router";
import { Text } from "@rneui/themed";
import { theme } from "@/constants/theme";

export const SwitchToLogin = () => (
  <Link href="/login">
    <Text
      style={{
        color: theme.colors.secondary,
        fontFamily: theme.fonts.primaryItalic,
      }}
    >
      Already have an account?{" "}
      <Text
        style={{
          color: theme.colors.secondary,
          textTransform: "uppercase",
          fontFamily: theme.fonts.primaryBold,
        }}
      >
        Login
      </Text>
    </Text>
  </Link>
);
