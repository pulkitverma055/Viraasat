import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo - positioned separately with spacing */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../images/red-fort.png")}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Red Fort"
        />
      </View>

      {/* Bottom Panel */}
      <View style={styles.bottomPanel}>
        <Text style={styles.title}>Welcome to Viraasat</Text>
        <Text style={styles.description}>
          A journey into India's glorious past awaits you. From magnificent
          monuments to hidden tales, experience the legacy of our culture
          reimagined with AR, anytime and anywhere.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/signup")}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const BEIGE = "#EDE1CB";
const DARK_RED = "#620007";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BEIGE,
  },
  logo: {
    width: 140,
    height: 80,
    alignSelf: "center",
    zIndex: 100,
    marginTop: 60, // ✅ spacing from top
    marginBottom: -100, // ✅ spacing from Red Fort
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: "130%",
    height: "130%",
  },
  bottomPanel: {
    flex: 0.7,
    backgroundColor: DARK_RED,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: BEIGE,
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: BEIGE,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    backgroundColor: BEIGE,
    height: 45,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: 8,
  },
  buttonText: {
    color: DARK_RED,
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
});

export default WelcomeScreen;