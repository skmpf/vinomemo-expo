import { forwardRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Formik, FormikProps } from "formik";
import {
  INote,
  NoteFormInitialValues,
  NoteFormValidationSchema,
  NoteFormValues,
} from "@/modules/note";
import { KeyboardAvoidingContainer } from "../KeyboardAvoidingContainer";
import { InformationForm } from "@/components/NoteForm/InformationForm";
import { AppearanceForm } from "@/components/NoteForm/AppearanceForm";
import { NoseForm } from "@/components/NoteForm/NoseForm";
import { PalateForm } from "@/components/NoteForm/PalateForm";
import { ConclusionsForm } from "@/components/NoteForm/ConclusionsForm";

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

export const NoteForm = forwardRef<FormikProps<NoteFormValues>>(
  (props, ref) => {
    const createNote = async (note: NoteFormValues) => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const res = await fetch(`${VINOMEMO_API_URL}/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(note),
        });
        if (!res.ok) throw new Error("Error creating note");
        return (await res.json()) as INote;
      } catch (e: any) {
        console.log(e);
      }
    };

    const handleSubmit = async (values: NoteFormValues) => {
      const note = await createNote(values);
      note && router.push("/notes");
    };

    return (
      <Formik
        initialValues={NoteFormInitialValues}
        validationSchema={NoteFormValidationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => handleSubmit(values)}
        innerRef={ref}
      >
        {() => (
          <KeyboardAvoidingContainer>
            <InformationForm />
            <AppearanceForm />
            <NoseForm />
            <PalateForm />
            <ConclusionsForm />
          </KeyboardAvoidingContainer>
        )}
      </Formik>
    );
  }
);
