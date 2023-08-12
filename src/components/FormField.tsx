import { View } from "react-native";
import { Text, Input, useTheme, InputProps } from "@rneui/themed";
import { FieldInputProps } from "formik";

type FormFieldProps = {
  label: string;
  name: string;
  value: any;
  errorMessage?: string;
  handleChange: FieldInputProps<any>["onChange"];
  handleBlur: FieldInputProps<any>["onBlur"];
  spacing?: number;
} & Partial<InputProps>;

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  errorMessage,
  handleChange,
  handleBlur,
  spacing = 10,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <View style={{ marginBottom: spacing }}>
      <Text style={{ color: theme.colors.primary }}>{label}</Text>
      <Input
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        errorMessage={errorMessage}
        autoCapitalize={props.autoCapitalize ? props.autoCapitalize : "none"}
        {...props}
      />
    </View>
  );
};
