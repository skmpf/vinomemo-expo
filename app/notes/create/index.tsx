import { Stack, router } from "expo-router";
import { Alert, Button, View } from "react-native";
import { Text } from "@rneui/themed";

export default function CreateNote() {
  const handleBack = () => {
    Alert.alert(
      "Warning",
      "Are you sure you want to go back? All changes will be lost.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Confirm", onPress: () => router.back() },
      ]
    );
  };

  const handleSave = () => {};

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
          title: "New note",
          headerLeft: () => (
            <Button title="Back" onPress={handleBack} color="#C94264" />
          ),
          headerRight: () => (
            <Button title="Save" onPress={handleSave} color="#C94264" />
          ),
        }}
      />
      <Text>Create note</Text>
    </View>
  );
}
