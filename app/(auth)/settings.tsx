import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const router = useRouter();

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/profile")} activeOpacity={0.7}>
          <FontAwesome name="angle-left" size={24} color="#6B0A0A" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.menuItem}>
        <FontAwesome name="lock" size={24} color="#6B0A0A" style={styles.menuIcon} />
        <Text style={styles.menuText}>Privacy Policy</Text>
        <FontAwesome name="angle-right" size={20} color="#6B0A0A" style={styles.arrowIcon} />
      </View>

      <View style={styles.menuItem}>
        <FontAwesome name="key" size={24} color="#6B0A0A" style={styles.menuIcon} />
        <Text style={styles.menuText}>Password Manager</Text>
        <FontAwesome name="angle-right" size={20} color="#6B0A0A" style={styles.arrowIcon} />
      </View>

      <View style={styles.menuItem}>
        <FontAwesome name="keyboard-o" size={24} color="#6B0A0A" style={styles.menuIcon} />
        <Text style={styles.menuText}>Change Language</Text>
        <FontAwesome name="angle-right" size={20} color="#6B0A0A" style={styles.arrowIcon} />
      </View>

      <View style={styles.menuItem}>
        <FontAwesome name="user-o" size={24} color="#6B0A0A" style={styles.menuIcon} />
        <Text style={styles.menuText}>Delete Account</Text>
        <FontAwesome name="angle-right" size={20} color="#6B0A0A" style={styles.arrowIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F0",
    paddingTop: 48,
    paddingHorizontal: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: "hidden"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 36,
    marginTop: '10%'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5E6D9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
    marginTop : '-5%'

  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginLeft: '17%',
    marginTop : '5%',
    color: "#6B0A0A",
    fontFamily: "System"
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38
  },
  menuIcon: {
    width: 32,
    marginRight: 16
  },
  menuText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    fontFamily: "System"
  },
  arrowIcon: {
    marginLeft: 8
  }
});

export default Settings;