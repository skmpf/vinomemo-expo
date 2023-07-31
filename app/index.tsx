import React from "react";
import { View } from "react-native";
import { router, Link } from "expo-router";
import { Button, Text } from "@rneui/themed";

export default function Page() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 50,
      }}
    >
      <View>
        <Text
          h1
          style={{
            fontFamily: "NotoSerif_400Regular",
            paddingBottom: 20,
          }}
          h1Style={{
            fontSize: 60,
          }}
        >
          Note down your wine tasting{" "}
          <Text
            style={{
              fontFamily: "NotoSerif_700Bold",
            }}
          >
            easily & quickly
          </Text>
        </Text>
        <Text
          style={{
            color: "#932541",
            fontSize: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "NotoSerif_400Regular",
              color: "#932541",
            }}
          >
            VinoMemo
          </Text>{" "}
          is the perfect way to reference and remember your wine tastings.
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 70,
        }}
      >
        <Button
          size="lg"
          radius="md"
          containerStyle={{ width: "100%", paddingBottom: 20 }}
          onPress={() => router.push("/signup")}
        >
          Sign up with email
        </Button>
        <Link href="/login">
          <Text
            style={{
              color: "#932541",
              fontFamily: "Roboto_400Regular_Italic",
              fontStyle: "italic",
            }}
          >
            Already have an account?{" "}
            <Text
              style={{
                textTransform: "uppercase",
                fontFamily: "Roboto_700Bold",
              }}
            >
              Login
            </Text>
          </Text>
        </Link>
      </View>
    </View>
  );
}