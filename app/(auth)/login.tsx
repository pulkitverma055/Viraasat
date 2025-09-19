import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  const router = useRouter();

	const handleLogin = () => {
		// TODO: replace with API call
		console.log("Logging in:", { username, password });
		alert("Login successful ✅");
	};

	return (
		<View style={styles.container}>
			{/* Header with back button */}
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					activeOpacity={0.7}
					onPress={() => router.back()}>
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

			<Text style={styles.title}>Login</Text>
			<Text style={styles.subtitle}>
				Access your journey into India’s heritage
			</Text>

			{/* Form Container */}
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Username"
					placeholderTextColor="#BFA9A9"
					value={username}
					onChangeText={setUsername}
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="default"
					returnKeyType="next"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					placeholderTextColor="#BFA9A9"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					returnKeyType="done"
				/>

				<TouchableOpacity activeOpacity={0.7}>
					<Text style={styles.forgotPassword}>Forgot Password?</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.loginButton}
					activeOpacity={0.8}
					onPress={() => router.push("/home")}>
					<Text style={styles.loginButtonText}>Login</Text>
				</TouchableOpacity>

				<View style={styles.orSignInContainer}>
					<View style={styles.line} />
					<Text style={styles.orSignInText}>or sign in with</Text>
					<View style={styles.line} />
				</View>

				<View style={styles.socialIconsContainer}>
					<TouchableOpacity
						style={styles.socialIcon}
						activeOpacity={0.7}>
						<FontAwesome
							name="facebook-f"
							size={28}
							color="#7A3B3B"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.socialIcon}
						activeOpacity={0.7}>
						<FontAwesome name="google" size={28} color="#7A3B3B" />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.socialIcon}
						activeOpacity={0.7}>
						<FontAwesome name="apple" size={28} color="#7A3B3B" />
					</TouchableOpacity>
				</View>

				<Text style={styles.signUpText}>
					Don’t have an account?{" "}
					<Text
						style={styles.signUpLink}
						onPress={() => router.push("/signup")}>
						Sign up
					</Text>
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EDE1CB",
	},
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
    marginTop: 10, // ✅ spacing from top
    marginBottom: 30, // ✅ spacing from Red Fort
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
	logoText: {
		fontSize: 18,
		color: "#7A3B3B",
		fontFamily: "serif",
		marginTop: 20,
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
	line: {
		flex: 1,
		height: 1,
		backgroundColor: "#F9F0E6",
	},
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