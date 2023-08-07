import { Stack, router, useLocalSearchParams } from "expo-router";
import { Text } from "@rneui/themed";
import { Button, View } from "react-native";

export default function Note() {
  const { id } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF8F0",
      }}
    >
      <Stack.Screen
        options={{
          title: "Note",
          headerRight: () => (
            <Button
              title="Edit"
              onPress={() => router.push("/notes/edit")}
              color="#C94264"
            />
          ),
        }}
      />
      <Text>Note {id}</Text>
    </View>
  );
}
