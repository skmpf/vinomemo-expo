import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { ScaleRadio } from "@/components/NoteForm/elements/ScaleRadio";
import { FormField } from "@/components/FormField";

export const PalateForm: React.FC = () => {
  const { values, errors, handleChange, handleBlur } =
    useFormikContext<INote>();

  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text h4>Palate</Text>
      <ScaleRadio
        label="Sweetness"
        name="palate.sweetness"
        options={["dry", "off-dry", "medium", "sweet"]}
        value={values.palate.sweetness}
      />
      <ScaleRadio
        label="Acidity"
        name="palate.acidity"
        options={["low", "medium", "high"]}
        value={values.palate.acidity}
      />
      <ScaleRadio
        label="Tannin"
        name="palate.tannin"
        options={["low", "medium", "high"]}
        value={values.palate.tannin}
      />
      <ScaleRadio
        label="Alcohol"
        name="palate.alcohol"
        options={["low", "medium", "high"]}
        value={values.palate.alcohol}
      />
      <ScaleRadio
        label="Body"
        name="palate.body"
        options={["light", "medium", "full"]}
        value={values.palate.body}
      />
      <ScaleRadio
        label="Flavor intensity"
        name="palate.intensity"
        options={["light", "medium", "pronounced"]}
        value={values.palate.intensity}
      />
      <FormField
        label="Flavor characteristics"
        name="palate.flavors"
        value={values.palate.flavors}
        errorMessage={errors.palate?.flavors}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <ScaleRadio
        label="Finish"
        name="palate.finish"
        options={["short", "medium", "long"]}
        value={values.palate.finish}
      />
    </View>
  );
};
