import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { FormField } from "@/components/FormField";
import { QualityPicker } from "@/components/NoteForm/elements/QualityPicker";

export const ConclusionsForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<INote>();

  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text h4>Conclusions</Text>
      <QualityPicker value={values.conclusions.quality} />
      <FormField
        label="Comments"
        name="conclusions.comments"
        value={values.conclusions.comments}
        errorMessage={errors.conclusions?.comments}
        handleChange={handleChange}
        handleBlur={handleBlur}
        multiline={true}
        style={{ height: 150, textAlignVertical: "top" }}
      />
    </View>
  );
};
