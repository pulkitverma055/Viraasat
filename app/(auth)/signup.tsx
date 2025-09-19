import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { signUp } from "aws-amplify/auth";

const SignUpScreen: React.FC = () => {
  const [username, setUsername] = useState(""); // used as email
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match ❌");
      return;
    }

    try {
      const { userId } = await signUp({
        username: username,
        password: password,
        options: {
          userAttributes: {
            email: username,
          },
        },
      });

      console.log("✅ Sign up successful! Confirmation code sent to email.");
      Alert.alert(
        "Sign Up Successful",
        "A confirmation code has been sent to your email. Please verify your account."
      );
      router.push("/confirm-signup");
    } catch (error: any) {
      console.log("❌ Error signing up:", error);
      Alert.alert("Sign Up Failed", error.message || "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <FontAwesome name="angle-left" size={24} color="#7A3B3B" />
        </TouchableOpacity>
      </View>

      {/* Logo and Title Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Begin your journey into India’s heritage
      </Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          placeholderTextColor="#BFA9A9"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
        />

        {/* Password with toggle */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            placeholderTextColor="#BFA9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            returnKeyType="next"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#F9F0E6"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password with toggle */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#BFA9A9"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesome
              name={showConfirmPassword ? "eye" : "eye-slash"}
              size={20}
              color="#F9F0E6"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={handleSignUp}
        >
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.orSignInContainer}>
          <View style={styles.line} />
          <Text style={styles.orSignInText}>or sign up with</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="facebook-f" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="google" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="apple" size={28} color="#7A3B3B" />
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpText}>
          Already have an account?{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => router.push("/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDE1CB" },
  header: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 15,
    marginTop: "10%",
  },
  logo: {
    width: 140,
    height: 80,
    alignSelf: "center",
    zIndex: 100,
    marginTop: 10,
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E9D9C3",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#6B1A1A",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7A3B3B",
    textAlign: "center",
    marginTop: 5,
    fontWeight: "600",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#6B1A1A",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderColor: "#E9D9C3",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#F9F0E6",
    marginBottom: 15,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E9D9C3",
    borderRadius: 25,
    marginBottom: 15,
    paddingRight: 15,
  },
  inputPassword: {
    flex: 1,
    height: 45,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#F9F0E6",
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: "#F9F0E6",
    width: "60%",
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginButtonText: {
    color: "#6B1A1A",
    fontWeight: "900",
    fontSize: 20,
    letterSpacing: 1.5,
  },
  orSignInContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,
  },
  line: { flex: 1, height: 1, backgroundColor: "#F9F0E6" },
  orSignInText: {
    color: "#F9F0E6",
    marginHorizontal: 10,
    fontWeight: "600",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 30,
  },
  socialIcon: {
    backgroundColor: "#F9F0E6",
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: "#F9F0E6",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  signUpLink: {
    textDecorationLine: "underline",
    fontWeight: "700",
  },
});

export default SignUpScreen;
