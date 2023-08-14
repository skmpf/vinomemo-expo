import { View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { INote } from "@/modules/note";

export const QualityPicker = ({ value }: { value: string }) => {
  const { theme } = useTheme();
  const { setFieldValue } = useFormikContext<INote>();

  const handleQualityChange = (quality: string) => {
    setFieldValue("conclusions.quality", quality);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: theme.colors.primary }}>Quality</Text>
      <Picker selectedValue={value} onValueChange={handleQualityChange}>
        <Picker.Item label="Select quality" />
        <Picker.Item label="Poor" value="poor" />
        <Picker.Item label="Acceptable" value="acceptable" />
        <Picker.Item label="Good" value="good" />
        <Picker.Item label="Very Good" value="very good" />
        <Picker.Item label="Outstanding" value="outstanding" />
      </Picker>
    </View>
  );
};
