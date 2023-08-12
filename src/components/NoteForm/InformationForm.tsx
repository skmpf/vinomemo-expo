import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { FormField } from "@/components/FormField";

export const InformationForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<INote>();

  return (
    <View
      style={
        {
          // paddingBottom: 20,
          // paddingTop: 100,
          // backgroundColor: "purple",
        }
      }
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
        value={values.information.vintage}
        errorMessage={errors.information?.vintage}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <FormField
        label="Alcohol"
        name="information.alcohol"
        value={values.information.alcohol}
        errorMessage={errors.information?.alcohol}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </View>
  );
};
