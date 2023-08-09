import { useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/providers/AuthProvider";

type UseLoginResponse = {
  isLoading: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
};

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

export const useLogin = (): UseLoginResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useAuth();

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${VINOMEMO_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        await authenticate(data.token);
        await AsyncStorage.setItem("token", data.token);
      }

      if (!response.ok) {
        throw new Error(data.message);
      }

      router.replace("/notes");
    } catch (error) {
      Alert.alert(
        "Login error",
        error instanceof Error ? error.message : "Please try again later",
        [{ text: "OK" }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginUser };
};

export default useLogin;
