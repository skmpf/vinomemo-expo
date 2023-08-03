import { Stack, router } from "expo-router";
import { Alert, Button, View } from "react-native";
import { Text } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../../providers/AuthProvider";

export default function Home() {
  const { logout } = useAuth();

  const handleBack = () => {
    Alert.alert("Warning", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "Confirm", onPress: () => logout() },
    ]);
  };

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
          title: "My notes",
          headerLeft: () => (
            <AntDesign
              onPress={() => router.push("/notes/create")}
              name="pluscircleo"
              size={24}
              color="#C94264"
            />
          ),
          headerRight: () => (
            <Button title="Logout" onPress={handleBack} color="#C94264" />
          ),
        }}
      />
      <Text>My Notes</Text>
    </View>
  );
}
