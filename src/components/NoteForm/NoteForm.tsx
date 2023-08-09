import { useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Formik } from "formik";
import {
  INote,
  NoteFormInitialValues,
  NoteFormValidationSchema,
  NoteFormValues,
} from "@/modules/note";
import { KeyboardAvoidingContainer } from "../KeyboardAvoidingContainer";
// import { InformationForm } from "./InformationForm";
// import { AppearanceForm } from "./AppearanceForm";
// import { NoseForm } from "./NoseForm";
// import { PalateForm } from "./PalateForm";
// import { ConclusionsForm } from "./ConclusionsForm";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const NoteForm = ({ note }: { note?: INote }) => {
  const [isLoading, setIsLoading] = useState(false);

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
    if (!isLoading) {
      setIsLoading(true);
      const note = await createNote(values);
      note && router.push("/notes");
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Formik
        initialValues={note ? note : NoteFormInitialValues}
        validationSchema={NoteFormValidationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          !isLoading && handleSubmit(values);
        }}
      >
        {(props) => (
          <KeyboardAvoidingContainer>
            {/* <InformationForm {...props} /> */}
            {/* <AppearanceForm errors={errors} touched={touched} />
            <NoseForm errors={errors} touched={touched} />
            <PalateForm errors={errors} touched={touched} />
            <ConclusionsForm errors={errors} touched={touched} /> */}
          </KeyboardAvoidingContainer>
        )}
      </Formik>
    </View>
  );
};
