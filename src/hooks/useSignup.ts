import { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/providers/AuthProvider";
import { handleError } from "@/modules/error";

type UseSignupResponse = {
  isLoading: boolean;
  signupUser: (name: string, password: string, email: string) => Promise<void>;
};

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

export const useSignup = (): UseSignupResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useAuth();

  const signupUser = async (name: string, password: string, email: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${VINOMEMO_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      if (data.token) {
        await authenticate(data.token);
        await AsyncStorage.setItem("token", data.token);
      }

      router.push("/notes");
    } catch (error) {
      handleError(error, "Signup error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signupUser };
};

export default useSignup;
