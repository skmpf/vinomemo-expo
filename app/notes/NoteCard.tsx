import { useState } from "react";
import { router } from "expo-router";
import { Button as RNEButton, ListItem, Text } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { INote } from "../../modules/note";
import { Icon } from "@rneui/base";

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
      containerStyle={{ backgroundColor: "#FFF8F0" }}
      onPress={() => router.push(`/notes/${note._id}`)}
      rightContent={() => (
        <RNEButton
          loading={isLoading}
          disabled={isLoading}
          loadingProps={{ color: "black" }}
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#C94264",
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
        <Text style={{ color: "grey" }}>
          <Entypo name="location-pin" color="#C94264" />{" "}
          {note.information.region}
        </Text>
        <Text style={{ textTransform: "capitalize", color: "grey" }}>
          <Entypo name="star" color="#C94264" /> {note.conclusions.quality}
        </Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          Added on {new Date(note.createdAt!).toLocaleString()}
        </Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};
