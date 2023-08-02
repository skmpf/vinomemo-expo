import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export const KeyboardAvoidingContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
