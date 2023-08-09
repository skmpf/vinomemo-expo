import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useFetch } from "@/hooks/useFetch";
import { Summary } from "@/components/NoteView/Summary";

export default function Note() {
  const { id } = useLocalSearchParams();
  const { data: note, isLoading, refetchData } = useFetch(`notes/${id}`);

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
          title: "Summary",
          headerLeft: () => (
            <Entypo
              title="Back"
              onPress={() => router.back()}
              name="chevron-thin-left"
              size={22}
              color="#C94264"
            />
          ),
          headerRight: () => (
            <Button
              title="Edit"
              onPress={() => router.push("/notes/edit")}
              color="#C94264"
            />
          ),
        }}
      />
      <Summary note={note} />
    </View>
  );
}
