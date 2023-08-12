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
import { theme as custom } from "@/constants/theme";

const theme = createTheme({
  lightColors: {
    primary: custom.colors.primary,
    secondary: custom.colors.secondary,
    background: custom.colors.background,
  },
  mode: "light",
  components: {
    Text: {
      style: {
        fontFamily: custom.fonts.primary,
      },
      h1Style: {
        fontFamily: custom.fonts.brand,
        fontSize: 50,
        color: custom.colors.primary,
        marginBottom: 20,
      },
      h2Style: {
        fontFamily: custom.fonts.primaryBold,
        fontSize: 23,
        color: custom.colors.primary,
        marginBottom: 20,
      },
      h4Style: {
        fontFamily: custom.fonts.primaryBold,
        fontSize: 18,
        color: custom.colors.primary,
        textAlign: "center",
        marginBottom: 20,
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
            backgroundColor: custom.colors.background,
          }}
        >
          <Slot />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
}
