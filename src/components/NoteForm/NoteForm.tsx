import { forwardRef } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Formik, FormikProps } from "formik";
import {
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
import api from "@/modules/api";

export const NoteForm = forwardRef<FormikProps<NoteFormValues>>(
  (props, ref) => {
    const { id } = useLocalSearchParams();

    const handleSubmit = async (values: NoteFormValues) => {
      let note;
      if (typeof id === "string") {
        note = await api.updateNote(id, values);
      } else {
        note = await api.createNote(values);
      }
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
