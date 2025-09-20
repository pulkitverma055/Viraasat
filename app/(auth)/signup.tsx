import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// ✅ 1. Import the new Supabase function
import { handleGoogleSignIn, handleSignUp as supabaseSignUp } from "../../app-example/app/lib/auth"; // Make sure path is correct

const SignUpScreen: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState(""); // This will be the email
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // ✅ 2. Updated function to call Supabase and navigate
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert(t("error"), t("password_mismatch"));
      return;
    }

    const success = await supabaseSignUp(username, password);

    if (success) {
      Alert.alert(t("success"), t("account_created")); 
      router.push("/login"); // 👈 Navigate to Login screen
    } else {
      Alert.alert(t("error"), t("signup_failed"));
    }
  };

  // ✅ 3. Wrap Google Sign-In with success/failure handling
  const handleGoogle = async () => {
    const success = await handleGoogleSignIn();
    if (success) {
      Alert.alert(t("success"), t("account_created"));
      router.replace("/(tabs)/login"); // 👈 Redirect to home after Google login
    } else {
      Alert.alert(t("error"), t("google_signin_failed"));
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
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{t("Sign Up")}</Text>
      <Text style={styles.subtitle}>{t("Create New Account")}</Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("username")}
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
            placeholder={t("password")}
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
            placeholder={t("confirm_password")}
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
          <Text style={styles.loginButtonText}>{t("Sign Up")}</Text>
        </TouchableOpacity>

        <View style={styles.orSignInContainer}>
          <View style={styles.line} />
          <Text style={styles.orSignInText}>{t("Or Sign Up With")}</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="facebook-f" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            activeOpacity={0.7}
            onPress={handleGoogle} // ✅ Wrapped handler
          >
            <FontAwesome name="google" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="apple" size={28} color="#7A3B3B" />
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpText}>
          {t("Already have an account?")}{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => router.push("/login")}
          >
            {t("Login")}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

// ✅ Styles remain unchanged
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDE1CB" },
  header: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 15,
    marginTop: "10%",
  },
  logo: {
    width: 280,
    height: 240,
    alignSelf: "center",
    zIndex: 100,
    marginTop: -70,
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
    marginTop: -15,
  },
  title: {
    fontSize: 64,
    fontWeight: "900",
    color: "#6B1A1A",
    textAlign: "center",
    marginTop: -75,
  },
  subtitle: {
    fontSize: 20,
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
  eyeIcon: { padding: 5 },
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
