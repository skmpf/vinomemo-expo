import { useCallback, useState } from "react";
import { Stack, router } from "expo-router";
import { Alert, Button, FlatList, RefreshControl, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../../providers/AuthProvider";
import { useFetch } from "../../hooks/useFetch";
import { NoteCard } from "./NoteCard";

export default function Home() {
  const { logout, user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: notes,
    isLoading,
    refetchData,
  } = useFetch(`users/${user?._id}/notes`);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
      <FlatList
        style={{ width: "100%" }}
        data={notes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <NoteCard note={item} callback={refetchData} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#C94264"
          />
        }
      />
    </View>
  );
}
