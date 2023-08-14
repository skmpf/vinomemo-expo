import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { FormField } from "@/components/FormField";
import { AlcoholPicker } from "@/components/NoteForm/elements/AlcoholPicker";

export const InformationForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<INote>();

  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text h4>Information</Text>
      <FormField
        label="Name"
        name="information.name"
        value={values.information.name}
        errorMessage={errors.information?.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Country"
        name="information.country"
        value={values.information.country}
        errorMessage={errors.information?.country}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Region"
        name="information.region"
        value={values.information.region}
        errorMessage={errors.information?.region}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Grapes"
        name="information.grapes"
        value={values.information.grapes}
        errorMessage={errors.information?.grapes}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Producer"
        name="information.producer"
        value={values.information.producer}
        errorMessage={errors.information?.producer}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Vintage"
        name="information.vintage"
        value={values.information?.vintage?.toString()}
        errorMessage={errors.information?.vintage}
        handleChange={handleChange}
        handleBlur={handleBlur}
        keyboardType="numeric"
      />
      <AlcoholPicker value={values.information.alcohol} />
    </View>
  );
};
