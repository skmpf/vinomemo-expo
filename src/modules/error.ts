import { Alert } from "react-native";

export const handleError = (error: any, message?: string) => {
  console.error(error);
  Alert.alert(
    message || "Error",
    error instanceof Error ? error.message : "Please try again later",
    [{ text: "OK" }]
  );
};
