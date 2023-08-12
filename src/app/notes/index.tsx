import { useCallback, useState } from "react";
import { Stack, router } from "expo-router";
import { Alert, Button, FlatList, RefreshControl, View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "@/providers/AuthProvider";
import { useFetch } from "@/hooks/useFetch";
import { NoteCard } from "@/components/NoteView/NoteCard";

export default function Home() {
  const { logout, user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: notes,
    isLoading,
    refetchData,
  } = useFetch(`users/${user?._id}/notes`);
  const { theme } = useTheme();

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
        backgroundColor: theme.colors.background,
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
              color={theme.colors.primary}
            />
          ),
          headerRight: () => (
            <Button
              title="Logout"
              onPress={handleBack}
              color={theme.colors.primary}
            />
          ),
        }}
      />
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ flex: 1 }}
        data={notes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <NoteCard note={item} callback={refetchData} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.primary}
          />
        }
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <Text>
              You don't have any note yet, create one by clicking on the +
              button!
            </Text>
          </View>
        }
      />
    </View>
  );
}
