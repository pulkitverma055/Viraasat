import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  useFonts,
  LexendExa_400Regular,
  LexendExa_600SemiBold,
  LexendExa_700Bold,
} from "@expo-google-fonts/lexend-exa";

// Get device width and height
const { width, height } = Dimensions.get("window");

// Dynamic scaling functions
const scale = (size) => (width / 390) * size; // base width 390px
const verticalScale = (size) => (height / 844) * size; // base height 844px
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// 👇 Dynamic data object
const monument = {
  title: "Ellora Caves",
  subtitle: "Maharashtra",
  image: require("../../assets/images/Cave.png"),
  description:
    "Ellora Caves are rock-cut temples and monasteries, blending Hindu, Buddhist, and Jain heritage.",
  info: [
    { label: "Built", value: "6th–10th century CE" },
    { label: "Location", value: "Aurangabad, Maharashtra" },
    { label: "UNESCO Status", value: "World Heritage Site" },
    {
      label: "Famous For",
      value: "Kailasa Temple (largest monolithic rock-cut temple)",
    },
  ],
};

const ElloraCavesScreen = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    LexendExa_400Regular,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={monument.image}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        accessibilityLabel={`Aerial view of ${monument.title}`}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/explore")}
          activeOpacity={0.7}
        >
          <FontAwesome name="arrow-left" size={scale(24)} color="#9c706eff" />
        </TouchableOpacity>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{monument.title}</Text>
          <Text style={styles.subtitle}>{monument.subtitle}</Text>
        </View>

        {/* Favorite Button */}
        <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.7}>
          <FontAwesome name="heart" size={scale(24)} color="#5B1A18" />
        </TouchableOpacity>
      </ImageBackground>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{monument.description}</Text>
        <Text style={styles.infoTitle}>Information</Text>

        {monument.info.map((item, index) => (
          <Text key={index} style={styles.infoText}>
            <Text style={styles.infoLabel}>{item.label}: </Text>
            {item.value}
          </Text>
        ))}

        {/* Buttons Row */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>View in AR</Text>
          </TouchableOpacity>

          {/* ✅ AI Chatbot Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => router.push("/ChatBot")} // Navigates to ChatBot screen
          >
            <Text style={styles.buttonText}>AI Chatbot</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },
  imageBackground: {
    width: "100%",
    height: verticalScale(494),
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: verticalScale(50),
  },
  imageStyle: {
    resizeMode: "cover",
  },
  backButton: {
    backgroundColor: "#FFF3DD",
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20),
    marginLeft: scale(20),
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: verticalScale(20),
    marginLeft: scale(-40),
  },
  title: {
    color: "#FFFFFF",
    fontSize: moderateScale(32),
    fontWeight: "bold",
    fontFamily: "SF Pro",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: moderateScale(15),
    letterSpacing: 2,
    fontWeight: "600",
    fontFamily: "LexendExa_600SemiBold",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  favoriteButton: {
    backgroundColor: "#FFF3DD",
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: verticalScale(20),
    marginRight: scale(20),
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
  },
  description: {
    color: "#5B1A18",
    fontSize: moderateScale(14),
    fontWeight: "500",
    fontFamily: "LexendExa_400Regular",
    marginBottom: verticalScale(15),
  },
  infoTitle: {
    color: "#5B1A18",
    fontSize: moderateScale(22),
    fontWeight: "bold",
    fontFamily: "SF Pro",
    marginBottom: verticalScale(5),
  },
  infoText: {
    color: "#5B1A18",
    fontSize: moderateScale(14),
    marginBottom: verticalScale(6),
    lineHeight: verticalScale(22),
    fontFamily: "LexendExa_400Regular",
  },
  infoLabel: {
    fontWeight: "bold",
    fontFamily: "LexendExa_600SemiBold",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(16),
  },
  button: {
    backgroundColor: "#5B1A18",
    borderRadius: scale(24),
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(18),
    minWidth: scale(140),
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF8F0",
    fontSize: moderateScale(18),
    fontWeight: "600",
    fontFamily: "LexendExa_600SemiBold",
    letterSpacing: 1.2,
  },
});

export default ElloraCavesScreen;
