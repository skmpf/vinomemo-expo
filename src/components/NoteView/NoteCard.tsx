import { useState } from "react";
import { router } from "expo-router";
import { Button as RNEButton, ListItem, Text, useTheme } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { INote } from "@/modules/note";

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

export const NoteCard = ({
  note,
  callback,
}: {
  note: INote;
  callback: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const deleteNote = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/${note._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error deleting note");
      return (await res.json()) as INote;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    await deleteNote();
    callback();
  };

  return (
    <ListItem.Swipeable
      rightWidth={90}
      bottomDivider
      containerStyle={{ backgroundColor: theme.colors.background }}
      onPress={() => router.push(`/notes/${note._id}`)}
      rightContent={() => (
        <RNEButton
          loading={isLoading}
          disabled={isLoading}
          loadingProps={{ color: theme.colors.black }}
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: theme.colors.primary,
          }}
          type="clear"
          onPress={handleDelete}
        >
          <Icon name="delete-outline" />
        </RNEButton>
      )}
    >
      <ListItem.Content style={{ paddingLeft: 5 }}>
        <ListItem.Title
          style={{ textTransform: "uppercase" }}
          numberOfLines={1}
        >
          {note.information.name}
        </ListItem.Title>
        <Text style={{ color: theme.colors.grey3 }}>
          <Entypo name="location-pin" color={theme.colors.primary} />{" "}
          {note.information.region}
        </Text>
        <Text
          style={{ textTransform: "capitalize", color: theme.colors.grey3 }}
        >
          <Entypo name="star" color={theme.colors.primary} />{" "}
          {note.conclusions.quality}
        </Text>
        <Text style={{ fontSize: 12, color: theme.colors.grey3 }}>
          Added on {new Date(note.createdAt!).toLocaleString()}
        </Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};
