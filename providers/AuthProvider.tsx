import { createContext, useContext, useEffect, useState } from "react";
import { router, useRootNavigationState, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { Alert } from "react-native";

export type User = {
  _id: string;
  name: string;
  email: string;
};

type DecodedToken = {
  user: User;
};

type UseAuth = {
  authenticate: (token: string) => Promise<void>;
  logout: () => void;
  user: User | null;
};

const AuthContext = createContext<UseAuth>({
  authenticate: () => Promise.resolve(),
  logout: () => {},
  user: null,
});

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: User | null) {
  const segments = useSegments();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // https://github.com/expo/router/issues/740
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace("/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the login page.
      router.replace("/notes");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setAuth] = useState<User | null>(null);

  useProtectedRoute(user);

  const authenticate = async (token: string) => {
    try {
      const decoded: DecodedToken = jwt_decode(token);
      const user = decoded?.user;
      setAuth(user);
    } catch (error) {
      Alert.alert(
        "Authentication error",
        error instanceof Error ? error.message : "Please try again later",
        [{ text: "OK" }]
      );
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(["token", "user"]);
      setAuth(null);
    } catch (error) {
      Alert.alert(
        "Logout error",
        error instanceof Error ? error.message : "Please try again later",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
