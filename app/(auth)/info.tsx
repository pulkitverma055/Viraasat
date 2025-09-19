import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const router = useRouter();

const App = () => {
  const [fullName, setFullName] = useState("Example User");
  const [phoneNumber, setPhoneNumber] = useState("+91 98765 43210");
  const [email, setEmail] = useState("xyz@example.com");
  const [dob, setDob] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/profile")}
          accessibilityLabel="Go back"
          activeOpacity={0.7}
        >
          <FontAwesome name="arrow-left" size={24} color="#5B0A0A" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Edit Info</Text>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://picsum.photos/100/100" }}
            style={styles.profileImage}
            accessibilityLabel="Profile picture of Garima"
          />
          <View style={styles.editIconContainer}>
            <FontAwesome name="pencil" size={16} color="#F5E9E7" />
          </View>
        </View>

        <Text style={styles.nameText}>User</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            placeholderTextColor="#5B0A0A"
            accessibilityLabel="Full Name input"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            placeholderTextColor="#5B0A0A"
            keyboardType="phone-pad"
            accessibilityLabel="Phone Number input"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#5B0A0A"
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Email input"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            value={dob}
            onChangeText={setDob}
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#5B0A0A"
            accessibilityLabel="Date of Birth input"
          />
        </View>

        <TouchableOpacity
          style={styles.updateButton}
          accessibilityLabel="Update Profile"
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFBF5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden"
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: "center",
    backgroundColor: "#FFFBF5",
    flexGrow: 1
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 24,
    backgroundColor: "#F5E9E7",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10
  },
  headerText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#5B0A0A",
    marginBottom: 24
  },
  profileContainer: {
    position: "relative",
    marginBottom: 12
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#5B0A0A",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFBF5"
  },
  nameText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#5B0A0A",
    letterSpacing: 1.5,
    marginBottom: 24
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20
  },
  label: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 6,
    color: "black"
  },
  input: {
    backgroundColor: "#F5E9E7",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#5B0A0A",
    fontWeight: "500"
  },
  updateButton: {
    marginTop: 12,
    backgroundColor: "#5B0A0A",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    minWidth: 200
  },
  updateButtonText: {
    color: "#FFFBF5",
    fontSize: 18,
    fontWeight: "500"
  }
});

export default App;