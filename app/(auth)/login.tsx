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
import { handleGoogleSignIn, handleSignIn } from "../../app-example/app/lib/auth"; // ✅ check path

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert(t("error"), t("login_required"));
      return;
    }

    try {
      const success = await handleSignIn(username, password); // ✅ call auth
      if (success) {
        router.push("/home");
      } else {
        Alert.alert(t("error"), t("invalid_credentials")); // ✅ error handling
      }
    } catch (err) {
      Alert.alert(t("error"), t("login_failed"));
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

      <Text style={styles.title}>{t("login_title")}</Text>
      <Text style={styles.subtitle}>{t("login_subtitle")}</Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {/* Username */}
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
            returnKeyType="done"
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

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.forgotPassword}>{t("Skip Log In")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={handleLogin} // ✅ use updated handler
        >
          <Text style={styles.loginButtonText}>{t("login")}</Text>
        </TouchableOpacity>

        <View style={styles.orSignInContainer}>
          <View style={styles.line} />
          <Text style={styles.orSignInText}>{t("or_sign_in")}</Text>
          <View style={styles.line} />
        </View>

        {/* Social login */}
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="facebook-f" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialIcon}
            activeOpacity={0.7}
            onPress={async () => {
              try {
                const googleUser = await handleGoogleSignIn(); // ✅ google login
                if (googleUser) {
                  router.push("/home");
                }
              } catch (err) {
                Alert.alert(t("error"), t("google_login_failed"));
              }
            }}
          >
            <FontAwesome name="google" size={28} color="#7A3B3B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
            <FontAwesome name="apple" size={28} color="#7A3B3B" />
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpText}>
          {t("no_account")}{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => router.push("/signup")}
          >
            {t("signup")}
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
  forgotPassword: {
    color: "#F9F0E6",
    fontWeight: "700",
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom: 25,
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

export default LoginScreen;
