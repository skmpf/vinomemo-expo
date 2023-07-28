import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useNotoSerif,
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from "@expo-google-fonts/noto-serif";

import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";

SplashScreen.preventAutoHideAsync();

// For Web platform https://stackoverflow.com/questions/73650434/add-expo-google-fonts-by-nativewind-or-tailwind
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Layout() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
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

  // Render the children routes now that all the assets are loaded.
  return (
    <SafeAreaView onLayout={onLayoutRootView} className="flex-1">
      <Slot />
    </SafeAreaView>
  );
}
