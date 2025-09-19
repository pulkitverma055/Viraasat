import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import i18n from "./i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageScreen = () => {
  const router = useRouter();

  const handleLanguageSelect = async (lang) => {
    try {
      await i18n.changeLanguage(lang); // ✅ set language
      await AsyncStorage.setItem("appLanguage", lang); // ✅ persist selected language
      router.replace("/(auth)"); // ✅ navigate to login/signup
    } catch (error) {
      console.log("Language change error:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Choose Language</Text>
      <Text style={styles.subtitle}>भाषा चुनिए</Text>

      {/* Language Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.langButton}
          onPress={() => handleLanguageSelect("en")}
        >
          <Text style={styles.langText}>English</Text>
          <Image
            source={require("../assets/images/english-icon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => handleLanguageSelect("hi")}
        >
          <Text style={styles.langText}>हिन्दी</Text>
          <Image
            source={require("../assets/images/hindi-icon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => handleLanguageSelect("or")}
        >
          <Text style={styles.langText}>ଓଡ଼ିଆ</Text>
          <Image
            source={require("../assets/images/odia-icon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BEIGE = "#EDE1CB";
const DARK_RED = "#7A0000";
const WHITE = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 280,
    marginTop: 0,
    marginBottom: -100,
    marginRight: -11,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: DARK_RED,
    marginBottom: "16%",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "600",
    color: DARK_RED,
    marginBottom: 10,
    marginTop: -50,
  },
  buttonContainer: {
    width: "90%",
    height: "50%",
    gap: 15,
    marginTop: 28,
  },
  langButton: {
    backgroundColor: DARK_RED,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  langText: {
    fontSize: 36,
    fontWeight: "600",
    color: BEIGE,
  },
  icon: {
    width: 140,
    height: 120,
  },
});

export default LanguageScreen;
