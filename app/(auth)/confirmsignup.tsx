import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// ✅ 1. Import the new Supabase functions
import { handleResendCode, handleVerifyOtp } from "../../app-example/app/lib/auth"; // Make sure path is correct

const ConfirmSignUpScreen: React.FC = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>(); // get email from SignUp
  const [code, setCode] = useState("");

  // ✅ 2. This function now calls the Supabase verification logic
  const handleConfirm = async () => {
    if (!email || !code) {
      Alert.alert("Error", "Email and code are required.");
      return;
    }
    const success = await handleVerifyOtp(email, code);
    if (success) {
      router.push("/login"); // Redirect to login after confirmation
    }
  };

  // ✅ 3. This function calls the Supabase resend logic
  const handleResend = async () => {
    if (!email) {
      Alert.alert("Error", "Email is missing.");
      return;
    }
    await handleResendCode(email);
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

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Logo.png")} // Make sure path is correct
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Verify Account</Text>
      <Text style={styles.subtitle}>
        Enter the code sent to{"\n"}
        <Text style={{ fontWeight: "700" }}>{email}</Text>
      </Text>

      {/* OTP Input */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#BFA9A9"
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          returnKeyType="done"
          maxLength={6} // OTPs are usually 6 digits
        />

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={handleConfirm}
        >
          <Text style={styles.loginButtonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resendButton}
          activeOpacity={0.7}
          onPress={handleResend}
        >
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmSignUpScreen;

// ✅ Your existing styles are included below
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
    fontSize: 36,
    fontWeight: "900",
    color: "#6B1A1A",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7A3B3B",
    textAlign: "center",
    marginBottom: 20,
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
    marginBottom: 20,
    textAlign: 'center', // Center the OTP code
  },
  loginButton: {
    backgroundColor: "#F9F0E6",
    width: "60%",
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#6B1A1A",
    fontWeight: "900",
    fontSize: 20,
    letterSpacing: 1.5,
  },
  resendButton: {
    marginTop: 10,
  },
  resendText: {
    color: "#F9F0E6",
    fontWeight: "700",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});