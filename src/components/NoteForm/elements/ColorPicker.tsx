import { Pressable, View } from "react-native";
import { Text, useTheme } from "@rneui/themed";
import { useFormikContext } from "formik";
import { INote } from "@/modules/note";

const COLORS_OPTIONS = [
  {
    color: "white",
    hex: "#F8EECA",
    variants: [
      { name: "lemon", hex: "#F8EECA" },
      { name: "amber", hex: "#DD7A31" },
      { name: "gold", hex: "#F4C75A" },
    ],
  },
  {
    color: "rosé",
    hex: "#F3CACA",
    variants: [
      { name: "pink", hex: "#F4C9CB" },
      { name: "pink-orange", hex: "#E99A8C" },
      { name: "orange", hex: "#F5A865" },
    ],
  },
  {
    color: "red",
    hex: "#910235",
    variants: [
      { name: "purple", hex: "#8E0051" },
      { name: "ruby", hex: "#910536" },
      { name: "garnet", hex: "#AE1220" },
      { name: "tawny", hex: "#8A1F17" },
    ],
  },
];

type SelectButtonProps = {
  backgroundColor: string;
  color: string;
  selected: string;
  handleSelect: (color: string) => void;
};

export const ColorPicker = ({
  value,
}: {
  value: { intensity: string; color: string; variant: string };
}) => {
  const { theme } = useTheme();
  const { setFieldValue } = useFormikContext<INote>();

  const handleColorSelect = (color: string) => {
    setFieldValue("appearance.color", color);
    setFieldValue("appearance.variant", "");
  };
  const handleVariantSelect = (variant: string) => {
    setFieldValue("appearance.variant", variant);
  };

  const SelectButton: React.FC<SelectButtonProps> = ({
    backgroundColor,
    color,
    selected,
    handleSelect,
  }) => {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={() => handleSelect(color)}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: backgroundColor,
            borderWidth: 3,
            borderColor:
              selected === color ? theme.colors.primary : "transparent",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: theme.colors.primary,
            textTransform: "uppercase",
          }}
        >
          {color}
        </Text>
      </View>
    );
  };

  const ColorSelect = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        {COLORS_OPTIONS.map((color) => (
          <SelectButton
            key={color.color}
            color={color.color}
            backgroundColor={color.hex}
            selected={value.color}
            handleSelect={handleColorSelect}
          />
        ))}
      </View>
    );
  };

  const VariantSelect = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        {COLORS_OPTIONS.find(
          (option) => option.color === value.color
        )?.variants.map((variant) => (
          <SelectButton
            key={variant.name}
            color={variant.name}
            backgroundColor={variant.hex}
            selected={value.variant}
            handleSelect={handleVariantSelect}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: theme.colors.primary, marginBottom: 20 }}>
        Color
      </Text>
      <ColorSelect />
      <VariantSelect />
    </View>
  );
};
