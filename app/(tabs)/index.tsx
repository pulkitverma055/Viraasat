import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // ✅ useRouter instead of useNavigation

const WelcomeScreen = () => {
  const router = useRouter(); // ✅ router for navigation

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../images/red-fort.png")}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Red Fort illustration"
        />
      </View>

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
            onPress={() => router.push("/login")} // ✅ navigate to login.tsx
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/signup")} // ✅ navigate to signup.tsx
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 400,
    height: 430,
  },
  bottomPanel: {
    backgroundColor: DARK_RED,
    width: 393,
    height: 353,
    marginBottom: -20,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  title: {
    color: BEIGE,
    fontSize: 36,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 33,
    marginBottom: 10,
  },
  description: {
    color: BEIGE,
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 19,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: BEIGE,
    height: 43,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: 5,
    marginTop: 20,
  },
  buttonText: {
    color: DARK_RED,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});

export default WelcomeScreen;
