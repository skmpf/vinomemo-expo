import { View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "@rneui/themed";
import { INote } from "@/modules/note";
import { ScaleRadio } from "@/components/NoteForm/elements/ScaleRadio";
import { ColorPicker } from "@/components/NoteForm/elements/ColorPicker";

export const AppearanceForm: React.FC = () => {
  const { values } = useFormikContext<INote>();

  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text h4>Appearance</Text>
      <ColorPicker />
      <ScaleRadio
        label="Intensity"
        name="appearance.intensity"
        options={["light", "medium", "pronounced"]}
        value={values.appearance.intensity}
      />
    </View>
  );
};
