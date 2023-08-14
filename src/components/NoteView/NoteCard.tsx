import { useState } from "react";
import { router } from "expo-router";
import { Button as RNEButton, ListItem, Text, useTheme } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import { INote } from "@/modules/note";
import api from "@/modules/api";

export const NoteCard = ({
  note,
  callback,
}: {
  note: INote;
  callback: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handleDelete = async () => {
    setIsLoading(true);
    await api.deleteNote(note._id);
    setIsLoading(false);
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
