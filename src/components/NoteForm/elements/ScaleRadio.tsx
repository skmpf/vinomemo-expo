import { Pressable, View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { useFormikContext } from "formik";
import { INote } from "@/modules/note";

type ScaleRadioProps = {
  label: string;
  name: string;
  options: string[];
  value: string;
};

export const ScaleRadio: React.FC<ScaleRadioProps> = ({
  label,
  name,
  options,
  value,
}) => {
  const { theme } = useTheme();
  const { setFieldValue } = useFormikContext<INote>();

  const maxHeight = 40;

  const handleSelect = (option: string) => {
    setFieldValue(name, option);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: theme.colors.primary, marginBottom: 10 }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {options.map((option, index) => (
          <View
            key={option}
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <Pressable
              onPress={() => handleSelect(option)}
              style={{
                height: (maxHeight * (index + 1)) / options.length,
                maxHeight: maxHeight,
                borderRadius: 10,
                marginHorizontal: 5,
                backgroundColor:
                  value === option ? theme.colors.primary : theme.colors.grey5,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: theme.colors.primary,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {option}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
