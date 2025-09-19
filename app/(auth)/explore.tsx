import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router, useRouter } from "expo-router"; // ✅ import router

const monuments = [
  { name: "Taj Mahal", uri: "https://picsum.photos/id/1011/100/100" },
  { name: "Ellora Caves", uri: "https://picsum.photos/id/1018/100/100" },
  { name: "Hawa Mahal", uri: "https://picsum.photos/id/1025/100/100" },
  { name: "Gadisar lake", uri: "https://picsum.photos/id/1035/100/100" },
  { name: "Hampi Temple", uri: "https://picsum.photos/id/1043/100/100" },
  { name: "Charminar", uri: "https://picsum.photos/id/1050/100/100" },
  { name: "Jantar Mantar", uri: "https://picsum.photos/id/1062/100/100" },
  { name: "Elephanta Caves", uri: "https://picsum.photos/id/1070/100/100" },
  { name: "Qutub Minar", uri: "https://picsum.photos/id/1084/100/100" },
  { name: "Sun Temple", uri: "https://picsum.photos/id/1080/100/100" },
  { name: "Buland Darwza", uri: "https://picsum.photos/id/109/100/100" },
  { name: "Pavagadh", uri: "https://picsum.photos/id/110/100/100" },
  { name: "Khajuraho Temple", uri: "https://picsum.photos/id/111/100/100" },
  { name: "Humayun’s Tomb", uri: "https://picsum.photos/id/112/100/100" },
  { name: "Rani ki Vav", uri: "https://picsum.photos/id/113/100/100" },
  { name: "Amber fort", uri: "https://picsum.photos/id/114/100/100" }
];

const bottomTabs = [
  { name: "Home", icon: "home" },
  { name: "Explore", icon: "compass" },
  { name: "Travel", icon: "map" },
  { name: "Profile", icon: "user" }
];

const App = () => {
  const [searchText, setSearchText] = useState("");

  // Filter monuments by search text
  const filteredMonuments = monuments.filter((m) =>
    m.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push("/home")} // 👈 navigate to Home
        // activeOpacity={0.7}
        >
            <FontAwesome name="arrow-left" size={24} color="#6B0A0A" />
            </TouchableOpacity>

        <Text style={styles.headerTitle}>Explore</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#9E9E9E" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search monuments"
          placeholderTextColor="#9E9E9E"
          value={searchText}
          onChangeText={setSearchText}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Monuments Grid */}
<ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
  {filteredMonuments.map((monument, index) => {
    const isEllora = monument.name === "Ellora Caves"; // 👈 check for Ellora

    return (
      <TouchableOpacity
        key={index}
        style={styles.monumentItem}
        activeOpacity={0.7}
        onPress={() => {
          if (isEllora) {
            router.push("/Ellora"); // 👈 navigate to Ellora page
          }
        }}
      >
        <Image
          source={{ uri: monument.uri }}
          style={styles.monumentImage}
          accessibilityLabel={`${monument.name} image`}
        />
        <Text style={styles.monumentName}>{monument.name}</Text>
      </TouchableOpacity>
    );
  })}
</ScrollView>


      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {bottomTabs.map((tab, index) => {
            const isActive = tab.name === "Explore";
            return (
            <TouchableOpacity
        key={index}
        style={styles.bottomNavItem}
        activeOpacity={0.7}
        onPress={() => {
          if (tab.name === "Home") {
            router.push("/home");   // 👈 navigate to Home
            } else if (tab.name === "Profile") {
            router.push("/profile"); // 👈 Navigate to Profile
            }
          // You can add later for Travel/Profile if needed
        }}
    
      >
        <FontAwesome
          name={tab.icon}
          size={24}
          color="#F0E6D2"
          style={{ opacity: isActive ? 1 : 0.5 }}
        />
        <Text
          style={[
            styles.bottomNavText,
            { fontWeight: isActive ? "700" : "400", opacity: isActive ? 1 : 0.5 }
          ]}
        >
          {tab.name}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>

    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const itemSize = (windowWidth - 48) / 4; // 4 items per row with 12px margin each side

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF6EB",
    paddingTop: 48,
    paddingHorizontal: 16,
    justifyContent: "flex-start"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24
  },
  backButton: {
    backgroundColor: "#F0E6D2",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop : '5%'
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: "#6B0A0A",
    fontFamily: "System",
    marginTop : '5%'
    
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0E6D2",
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 12,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    opacity : 0.8
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#9E9E9E",
    fontWeight: "500",
    fontFamily: "System"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 96
  },
  monumentItem: {
    width: itemSize,
    marginBottom: 24,
    alignItems: "center"
  },
  monumentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8
  },
  monumentName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    fontFamily: "System"
  },
  bottomNav: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    height: 72,
    backgroundColor: "#6B0A0A",
    borderRadius: 36,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    marginBottom : '2%'
  },
  bottomNavItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  bottomNavText: {
    color: "#F0E6D2",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "System"
  }
});

export default App;