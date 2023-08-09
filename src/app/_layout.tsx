import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useNotoSerif,
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from "@expo-google-fonts/noto-serif";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { AuthProvider } from "@/providers/AuthProvider";

const theme = createTheme({
  lightColors: {
    primary: "#C94264",
    secondary: "#FFF8F0",
  },
  mode: "light",
  components: {
    Text: {
      style: {
        fontFamily: "Roboto_400Regular",
        color: "#C94264",
      },
    },
  },
});

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });
  const [notoSerifLoaded] = useNotoSerif({
    NotoSerif_400Regular,
    NotoSerif_700Bold,
  });
  const fontsLoaded = robotoLoaded && notoSerifLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SafeAreaView
          onLayout={onLayoutRootView}
          style={{
            flex: 1,
            backgroundColor: "#FFF8F0",
          }}
        >
          <Slot />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
}
