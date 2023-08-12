import { View } from "react-native";
import { useTheme } from "@rneui/themed";

export const ViewContainer = ({
  children,
  pH = 30,
}: {
  children: React.ReactNode;
  pH?: number;
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingHorizontal: pH,
        justifyContent: "space-around",
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </View>
  );
};
