import { useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { Alert } from "react-native";
import { Button, useTheme } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { FormikProps } from "formik";
import { NoteForm } from "@/components/NoteForm/NoteForm";
import { NoteFormValues } from "@/modules/note";
import { ViewContainer } from "@/components/ViewContainer";

export default function CreateNote() {
  const { theme } = useTheme();
  const formikRef = useRef<FormikProps<NoteFormValues>>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (formikRef.current?.dirty) {
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
    } else {
      router.back();
    }
  };

  const handleSave = async () => {
    if (!isLoading) {
      setIsLoading(true);
      await formikRef.current?.submitForm();
      setIsLoading(false);
    }
  };

  return (
    <ViewContainer pH={0}>
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
              loading={isLoading}
              disabled={isLoading}
              type="clear"
              onPress={handleSave}
            />
          ),
        }}
      />
      <NoteForm ref={formikRef} />
    </ViewContainer>
  );
}
