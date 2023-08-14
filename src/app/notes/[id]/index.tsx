import { Stack, router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";
import { useFetch } from "@/hooks/useFetch";
import { Summary } from "@/components/NoteView/Summary";
import { ViewContainer } from "@/components/ViewContainer";

export default function ViewNote() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams();
  const { data: note, isLoading } = useFetch(`notes/${id}`);

  return (
    <ViewContainer pH={0}>
      <Stack.Screen
        options={{
          title: "Summary",
          headerLeft: () => (
            <Entypo
              title="Back"
              onPress={() => router.back()}
              name="chevron-thin-left"
              size={22}
              color={theme.colors.primary}
            />
          ),
          headerRight: () => (
            <Button
              title="Edit"
              onPress={() => router.push(`/notes/edit/${id}`)}
              color={theme.colors.primary}
            />
          ),
        }}
      />
      {isLoading ? (
        <ActivityIndicator color={theme.colors.primary} />
      ) : (
        <Summary note={note} />
      )}
    </ViewContainer>
  );
}
