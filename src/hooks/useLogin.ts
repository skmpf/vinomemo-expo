import { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import api from "@/modules/api";

type UseLoginResponse = {
  isLoading: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
};

export const useLogin = (): UseLoginResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { authenticate } = useAuth();

  const loginUser = async (email: string, password: string) => {
    setIsLoading(true);
    const token = await api.login(email, password);
    if (token) {
      await authenticate(token);
    }
    router.replace("/notes");
    setIsLoading(false);
  };
  return { isLoading, loginUser };
};

export default useLogin;
