import React from "react";
import { Text, View } from "react-native";
import { useFonts, LeagueSpartan_400Regular, LeagueSpartan_700Bold } from "@expo-google-fonts/league-spartan";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    LeagueSpartan_400Regular,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "LeagueSpartan_400Regular", fontSize: 24 }}>
        League Spartan Regular
      </Text>
      <Text style={{ fontFamily: "LeagueSpartan_700Bold", fontSize: 24 }}>
        League Spartan Bold
      </Text>
    </View>
  );
}
