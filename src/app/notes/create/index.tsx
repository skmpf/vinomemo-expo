import { useRef } from "react";
import { Stack, router } from "expo-router";
import { Alert, Button, View } from "react-native";
import { useTheme } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { FormikProps } from "formik";
import { NoteForm } from "@/components/NoteForm/NoteForm";
import { NoteFormValues } from "@/modules/note";

export default function CreateNote() {
  const { theme } = useTheme();
  const formikRef = useRef<FormikProps<NoteFormValues>>(null);

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

  const handleSave = () => {
    formikRef.current?.submitForm();
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
          title: "New note",
          headerLeft: () => (
            <Entypo
              title="Back"
              onPress={handleBack}
              name="chevron-thin-left"
              size={22}
              color={theme.colors.primary}
            />
          ),
          headerRight: () => (
            <Button
              title="Save"
              onPress={handleSave}
              color={theme.colors.primary}
            />
          ),
        }}
      />
      <NoteForm ref={formikRef} />
    </View>
  );
}
