import { useEffect, useState } from "react";
import api from "@/modules/api";

export const useFetch = (endpoint: string = "") => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await api.fetch(endpoint);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    fetchData();
  };

  return { data, isLoading, refetchData };
};
