import { LeagueSpartan_400Regular, LeagueSpartan_700Bold, useFonts } from "@expo-google-fonts/league-spartan";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// i18n imports
import { I18nextProvider } from "react-i18next";
import i18n, { initI18n } from "../app-example/app/i18n";

// Expo Router root layout
import RootLayout from "./_layout";

export default function App() {
  const [ready, setReady] = useState(false);

  // Load fonts
  const [fontsLoaded] = useFonts({
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });

  useEffect(() => {
    (async () => {
      await initI18n(); // wait for i18n initialization
      setReady(true);
    })();
  }, []);

  if (!fontsLoaded || !ready) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <RootLayout />
    </I18nextProvider>
  );
}