import { Link } from "expo-router";
import { Text } from "@rneui/themed";
import { theme } from "@/constants/theme";

export const SwitchToReg = () => (
  <Link href="/signup">
    <Text
      style={{
        color: theme.colors.secondary,
        fontFamily: theme.fonts.primaryItalic,
      }}
    >
      Not registered on{" "}
      <Text
        style={{
          color: theme.colors.secondary,
          fontFamily: theme.fonts.brand,
        }}
      >
        VinoMemo
      </Text>{" "}
      yet?{" "}
      <Text
        style={{
          color: theme.colors.secondary,
          textTransform: "uppercase",
          fontFamily: theme.fonts.primaryBold,
        }}
      >
        Signup
      </Text>
    </Text>
  </Link>
);
