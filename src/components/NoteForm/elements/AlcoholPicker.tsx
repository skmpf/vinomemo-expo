import { View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { INote } from "@/modules/note";

export const AlcoholPicker = ({ value }: { value: string }) => {
  const { theme } = useTheme();
  const { setFieldValue } = useFormikContext<INote>();

  const handleABVChange = (alcohol: string) => {
    setFieldValue("information.alcohol", alcohol);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: theme.colors.primary }}>ABV</Text>
      <Picker selectedValue={value} onValueChange={handleABVChange}>
        {Array.from(Array(45).keys()).map((i) => {
          const value = (i * 0.5).toFixed(1);
          return <Picker.Item key={value} label={value} value={value} />;
        })}
      </Picker>
    </View>
  );
};
