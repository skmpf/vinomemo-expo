import { useState } from "react";
import { View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { INote } from "@/modules/note";

export const AlcoholPicker = () => {
  const { theme } = useTheme();
  const { values, setFieldValue } = useFormikContext<INote>();
  const [selectedABV, setSelectedABV] = useState(values.information.alcohol);

  const handleABVChange = (itemValue: string) => {
    setSelectedABV(itemValue);
    setFieldValue("information.alcohol", itemValue);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: theme.colors.primary }}>Alcohol</Text>
      <Picker selectedValue={selectedABV} onValueChange={handleABVChange}>
        {Array.from(Array(45).keys()).map((i) => {
          const value = (i * 0.5).toFixed(1);
          return <Picker.Item key={value} label={value} value={value} />;
        })}
      </Picker>
    </View>
  );
};
