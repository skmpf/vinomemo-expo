import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator } from "react-native";
import NoteFormScreen from "@/components/NoteForm/NoteFormScreen";
import { useFetch } from "@/hooks/useFetch";
import { ViewContainer } from "@/components/ViewContainer";
import { useTheme } from "@rneui/themed";

export default function EditNote() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams();
  const { data: note, isLoading } = useFetch(`notes/${id}`);

  return isLoading ? (
    <ViewContainer>
      <ActivityIndicator color={theme.colors.primary} />
    </ViewContainer>
  ) : (
    <NoteFormScreen note={note} isNoteLoading={isLoading} />
  );
}
