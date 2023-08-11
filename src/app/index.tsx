import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text, useTheme } from "@rneui/themed";
import { SwitchToLogin } from "@/components/SwitchToLogin";
import { theme as custom } from "@/constants/theme";

export default function Page() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "space-around",
      }}
    >
      <View>
        <Text h1>
          Note down your wine tasting{" "}
          <Text
            style={{
              fontFamily: custom.fonts.brandBold,
              color: theme.colors.primary,
            }}
          >
            easily & quickly
          </Text>
        </Text>
        <Text
          style={{
            color: theme.colors.secondary,
            fontSize: 15,
          }}
        >
          <Text
            style={{
              fontFamily: custom.fonts.brand,
              color: theme.colors.secondary,
            }}
          >
            VinoMemo
          </Text>{" "}
          is the perfect way to reference and remember your wine tastings.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          size="lg"
          radius="md"
          containerStyle={{ width: "100%", paddingBottom: 20 }}
          onPress={() => router.push("/signup")}
        >
          Sign up with email
        </Button>
        <SwitchToLogin />
      </View>
    </View>
  );
}
