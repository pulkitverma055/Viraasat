import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts, LeagueSpartan_400Regular, LeagueSpartan_700Bold } from "@expo-google-fonts/league-spartan";
import { Amplify } from "aws-amplify";
import config from "./aws-exports"; 

// i18n imports
import { I18nextProvider } from "react-i18next";
import i18n, { initI18n } from "./i18n"; // ⚠️ use initI18n here

// Expo Router root layout
import RootLayout from "../app/_layout"; // ✅ fixed path (your file is inside app/)

Amplify.configure(config);

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
