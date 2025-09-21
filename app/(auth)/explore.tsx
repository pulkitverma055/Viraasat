import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router"; // ✅ import router
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useTranslation } from "react-i18next"; // ✅ import translation hook

const monuments = [
  { nameKey: "taj_mahal", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "ellora_caves", image: require("../../assets/images/Elora.jpeg") },
  { nameKey: "hawa_mahal", image: require("../../assets/images/Hawa-Mahal.jpeg") },
  { nameKey: "gadisar_lake", image: require("../../assets/images/Gadisar-Lake.jpeg") },
  { nameKey: "hampi_temple", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "charminar", image: require("../../assets/images/CharMinar.jpeg") },
  { nameKey: "jantar_mantar",image: require("../../assets/images/Jantar-Mantar.jpeg") },
  { nameKey: "elephanta_caves", image: require("../../assets/images/Elephanta-Caves.jpeg") },
  { nameKey: "qutub_minar", image: require("../../assets/images/Qutub-Minar.jpeg") },
  { nameKey: "sun_temple", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "buland_darwaza", image: require("../../assets/images/Taj-Mahal.jpeg")},
  { nameKey: "pavagadh", image: require("../../assets/images/Pavagadh.jpeg")},
  { nameKey: "khajuraho_temple", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "humayuns_tomb",image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "rani_ki_vav", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { nameKey: "amber_fort", image: require("../../assets/images/Amber-Fort.jpeg") }
];

const bottomTabs = [
  { nameKey: "home", icon: "home" },
  { nameKey: "explore", icon: "compass" },
  { nameKey: "travel", icon: "map" },
  { nameKey: "profile", icon: "user" }
];

const App = () => {
  const { t } = useTranslation(); // ✅ translation hook
  const [searchText, setSearchText] = useState("");

  // Filter monuments by search text
  const filteredMonuments = monuments.filter((m) =>
    t(m.nameKey).toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push("/home")}
        >
          <FontAwesome name="arrow-left" size={24} color="#6B0A0A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t("explore_title")}</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#9E9E9E" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder={t("search_placeholder")}
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
          const isEllora = monument.nameKey === "ellora_caves"; // 👈 check for Ellora

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
                source={monument.image}
                style={styles.monumentImage}
                accessibilityLabel={`${t(monument.nameKey)} image`}
              />
              <Text style={styles.monumentName}>{t(monument.nameKey)}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {bottomTabs.map((tab, index) => {
          const isActive = tab.nameKey === "explore";
          return (
            <TouchableOpacity
              key={index}
              style={styles.bottomNavItem}
              activeOpacity={0.7}
              onPress={() => {
                if (tab.nameKey === "home") {
                  router.push("/home");   
                } else if (tab.nameKey === "profile") {
                  router.push("/profile"); 
                }
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
                {t(tab.nameKey)}
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
