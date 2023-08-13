import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export const KeyboardAvoidingContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, width: "100%" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 30,
        }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
