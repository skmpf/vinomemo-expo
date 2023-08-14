import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleError } from "./error";
import { INote, NoteFormValues } from "./note";

const VINOMEMO_API_URL =
  process.env.EXPO_PUBLIC_VINOMEMO_API_URL || "http://localhost:3001";

const api = {
  login: async (email: string, password: string) => {
    try {
      const response = await fetch(`${VINOMEMO_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
      }
      return data.token;
    } catch (error) {
      handleError(error, "Login error");
    }
  },
  signup: async (name: string, password: string, email: string) => {
    try {
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
        await AsyncStorage.setItem("token", data.token);
      }
      return data.token;
    } catch (error) {
      handleError(error, "Signup error");
    }
  },
  fetch: async (endpoint: string = "") => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching data");
      return await res.json();
    } catch (error) {
      handleError(error, "Error fetching data");
    }
  },
  createNote: async (note: NoteFormValues) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      });
      if (!res.ok) throw new Error("Error creating note");
      return (await res.json()) as INote;
    } catch (error) {
      handleError(error, "Error creating note");
    }
  },
  updateNote: async (id: string, note: NoteFormValues) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      });
      if (!res.ok) throw new Error("Error updating note");
      return (await res.json()) as INote;
    } catch (error) {
      handleError(error, "Error updating note");
    }
  },
  deleteNote: async (id: string) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error deleting note");
      return (await res.json()) as INote;
    } catch (error) {
      handleError(error, "Error deleting note");
    }
  },
};

export default api;
