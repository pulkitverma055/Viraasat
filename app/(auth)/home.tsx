import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const popularSites = [
  { id: 1, name: "Ellora Caves", image: require("../../assets/images/Elora.jpeg") },
  { id: 2, name: "Taj Mahal", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { id: 3, name: "Lotus Temple", image: require("../../assets/images/Lotus-Temple.jpeg") },
  { id: 4, name: "Hawa Mahal", image: require("../../assets/images/Hawa-Mahal.jpeg") },
];

const recommendedSites = [
  { id: 1, name: "", location: "", image: require("../../assets/images/Ellora-Cave.jpeg") },
  { id: 2, name: "", location: "", image: require("../../assets/images/Taj-Mahal.jpeg") },
  { id: 3, name: "", location: "", image: require("../../assets/images/HawaMahal.jpeg") },
  { id: 4, name: "", location: "", image: require("../../assets/images/QutubMinar.jpeg") },
  { id: 5, name: "", location: "", image: require("../../assets/images/CharMinar.jpeg") },
];

export default function HomeScreen() {
  const { t } = useTranslation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderRecommended = ({ item, index }) => {
  const inputRange = [
    (index - 1) * (width * 0.75),
    index * (width * 0.75),
    (index + 1) * (width * 0.75),
  ];

  const scaleAnim = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
    extrapolate: "clamp",
  });

  const opacityAnim = scrollX.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: "clamp",
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        // Navigate to Ellora screen if the image matches
        if (item.image === require("../../assets/images/Ellora-Cave.jpeg")) {
          router.push("/Ellora");
        }
        // Add other navigations if needed
      }}
    >
      <Animated.View
        style={[
          styles.recommendedCard,
          { transform: [{ scale: scaleAnim }], opacity: opacityAnim },
        ]}
      >
        <Image source={item.image} style={styles.recommendedImage} />
        <View style={styles.recommendedTextContainer}>
          <Text style={styles.recommendedName}>{item.name}</Text>
          <Text style={styles.recommendedLocation}>{item.location}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F5EE" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
              style={styles.profileImage}
            />
            <View style={styles.greetingTextContainer}>
              <Text style={styles.greetingSmall}>{t("greeting_small", { name: "Naman" })}</Text>
              <Text style={styles.greetingLarge}>{t("greeting_large")}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.settingsButton}
            onPressOut={() => router.push("/settings")}
            activeOpacity={0.7}
          >
            <FontAwesome name="cog" size={28} color="#6B0A0A" />
          </TouchableOpacity>
        </View>

        {/* Explore Text */}
        <Text style={styles.exploreText}>{t("explore_text")}</Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={20} color="#B3B3B3" style={{ marginLeft: 12 }} />
          <TextInput
            placeholder={t("search_placeholder")}
            placeholderTextColor="#B3B3B3"
            style={styles.searchInput}
          />
          <FontAwesome name="sliders" size={20} color="#6B0A0A" style={{ marginRight: 12 }} />
        </View>

        {/* Popular Sites */}
        <Text style={styles.sectionTitle}>{t("popular_sites")}</Text>
        <View style={styles.popularSitesContainer}>
          {popularSites.map((site) => (
            <TouchableOpacity
              key={site.id}
              style={styles.popularSiteItem}
              onPress={() => site.name === "Ellora Caves" && router.push("/Ellora")}
              activeOpacity={0.7}
            >
              <Image source={site.image} style={styles.popularSiteImage} />
              <Text style={styles.popularSiteName}>{site.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recommended */}
        <Text style={styles.sectionTitle}>{t("recommended")}</Text>
        <Animated.FlatList
          data={recommendedSites}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.75}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: (width - width * 0.9) / 2,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          renderItem={renderRecommended}
        />
      </ScrollView>

      {/* Bottom Nav */}
      <LinearGradient colors={["#6B0A0A", "#6B0A0A"]} style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <FontAwesome name="home" size={28} color="#F9F5EE" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>{t("bottom_home")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => router.push("/explore")}
        >
          <FontAwesome name="compass" size={24} color="#D3B9B9" />
          <Text style={styles.navLabel}>{t("bottom_explore")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <FontAwesome name="shopping-bag" size={24} color="#D3B9B9" />
          <Text style={styles.navLabel}>{t("Bazaar")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => router.push("/profile")}
        >
          <FontAwesome name="user" size={24} color="#D3B9B9" />
          <Text style={styles.navLabel}>{t("bottom_profile")}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5EE",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    marginTop: "10%",
  },
  greetingTextContainer: {
    justifyContent: "center",
    marginTop: "10%",
  },
  greetingSmall: {
    fontSize: 14,
    color: "#6B0A0A",
    fontWeight: "400",
    marginTop: "10%",
  },
  greetingLarge: {
    fontSize: 20,
    color: "#6B0A0A",
    fontWeight: "500",
    fontFamily: "System",
  },
  settingsButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#6B0A0A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: "10%",
  },
  settingsShadow: {
    position: "absolute",
    bottom: 0,
    width: 36,
    height: 4,
    backgroundColor: "rgba(107, 10, 10, 0.3)",
    borderRadius: 2,
    marginTop: "10%",
  },
  exploreText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#6B0A0A",
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E9DD",
    borderRadius: 24,
    height: 44,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#B3B3B3",
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6B0A0A",
    marginBottom: 12,
  },
  popularSitesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  popularSiteItem: {
    alignItems: "center",
    width: 70,
  },
  popularSiteImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 6,
  },
  popularSiteName: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  recommendedCard: {
    width: width * 0.75,
    height: width * 0.85,
    borderRadius: 30,
    marginHorizontal: -5,
    overflow: "hidden",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    left: -6, 
    marginBottom: 20,
    marginTop: '5%',
    marginLeft: '1%'
  },
  recommendedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  recommendedTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  recommendedName: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  recommendedLocation: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  bottomNavBar: {
    height: 70,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 0,
    marginBottom: '10%',
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 14,
    color: "#D3B9B9",
    fontWeight: "600",
    marginTop: 4,
  },
  navLabelActive: {
    color: "#F9F5EE",
    fontWeight: "700",
  },
});
