import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import { useAuth } from "../../providers/AuthProvider";

export default function Page() {
  const { logout } = useAuth();

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 70,
      }}
    >
      <Text>Notes</Text>
      <Text
        onPress={logout}
        style={{
          fontFamily: "Roboto_400Regular_Italic",
          fontStyle: "italic",
        }}
      >
        Logout
      </Text>
    </View>
  );
}
