import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

export const useFetch = (
  endpoint: string = "",
  options?: { method?: "GET" | "POST" | "PUT" | "DELETE"; body?: {} }
) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");
      const res = await fetch(`${VINOMEMO_API_URL}/${endpoint}`, {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(options?.body) || null,
      });
      if (!res.ok) throw new Error("Error fetching data");
      const data = await res.json();
      setData(data);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    fetchData();
  };

  return { data, isLoading, error, refetchData };
};
