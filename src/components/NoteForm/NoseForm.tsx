import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { ScaleRadio } from "@/components/NoteForm/elements/ScaleRadio";
import { FormField } from "@/components/FormField";

export const NoseForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<INote>();

  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text h4>Nose</Text>
      <ScaleRadio
        label="Intensity"
        name="nose.intensity"
        options={["light", "medium", "pronounced"]}
        value={values.nose.intensity}
      />
      <FormField
        label="Aroma characteristics"
        name="nose.aromas"
        value={values.nose.aromas}
        errorMessage={errors.nose?.aromas}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </View>
  );
};
