import { useEffect, useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { ActivityIndicator, Alert } from "react-native";
import { Button, Text, useTheme } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { FormikProps } from "formik";
import { NoteForm } from "@/components/NoteForm/NoteForm";
import { INote, NoteFormValues } from "@/modules/note";
import { ViewContainer } from "@/components/ViewContainer";
import { theme as custom } from "@/constants/theme";

export default function NoteFormScreen({
  note,
  isNoteLoading,
}: {
  note?: INote;
  isNoteLoading?: boolean;
}) {
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

  useEffect(() => {
    note && formikRef.current?.setValues(note);
  }, []);

  const HeaderTitle = ({ title }: { title: string }) => (
    <Text
      style={{
        fontFamily: custom.fonts.primaryBold,
        fontSize: 17,
        color: theme.colors.primary,
      }}
    >
      {title}
    </Text>
  );

  return (
    <ViewContainer pH={0}>
      <Stack.Screen
        options={{
          headerTitle: () =>
            isNoteLoading ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : note ? (
              <HeaderTitle title="Edit note" />
            ) : (
              <HeaderTitle title="New note" />
            ),
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
