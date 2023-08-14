import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import api from "@/modules/api";

type UseSignupResponse = {
  isLoading: boolean;
  signupUser: (name: string, password: string, email: string) => Promise<void>;
};

export const useSignup = (): UseSignupResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useAuth();

  const signupUser = async (name: string, password: string, email: string) => {
    setIsLoading(true);
    const token = await api.signup(name, password, email);
    if (token) {
      await authenticate(token);
    }
    router.push("/notes");
    setIsLoading(false);
  };
  return { isLoading, signupUser };
};

export default useSignup;
