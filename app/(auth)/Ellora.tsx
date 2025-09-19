import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ElloraCavesScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={require("../../assets/images/Cave.png")}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        accessibilityLabel="Aerial view of Ellora Caves rock-cut temple"
      >
        <TouchableOpacity style={styles.backButton} 
        onPress={() => router.push("/explore")} // 👈 navigate to Home
        activeOpacity={0.7}>
          <FontAwesome name="arrow-left" size={24} color="#5B1A18" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ellora Caves</Text>
          <Text style={styles.subtitle}>Maharastra</Text>
        </View>
        <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.7}>
          <FontAwesome name="heart" size={24} color="#5B1A18" />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.description}>
          Ellora Caves are rock-cut temples and monasteries, blending Hindu, Buddhist, and Jain heritage.
        </Text>

        <Text style={styles.infoTitle}>Information</Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Built: </Text>6th–10th century CE
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Location: </Text>Aurangabad, Maharashtra
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>UNESCO Status: </Text>World Heritage Site
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Famous For: </Text>Kailasa Temple (largest monolithic rock-cut temple)
        </Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>View in AR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
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
    borderRadius: 30,
    overflow: "hidden",
    margin: 0
  },
  imageBackground: {
    width: 390,
    height: 494,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 50,
    paddingHorizontal: 0,

  },
  imageStyle: {
    resizeMode: "cover"
  },
  backButton: {
    backgroundColor: "#FFF3DD",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingLeft: -10,
    marginLeft: '-10%'
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    marginRight: '20%'
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    letterSpacing: 2,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4
  },
  favoriteButton: {
    backgroundColor: "#FFF3DD",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 20,
    marginRight: 20
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 0,

  },
  description: {
    color: "#5B1A18",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15
  },
  infoTitle: {
    color: "#5B1A18",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  infoText: {
    color: "#5B1A18",
    fontSize: 16,
    marginBottom: 6,
    lineHeight: 22
  },
  infoLabel: {
    fontWeight: "bold"
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  button: {
    backgroundColor: "#5B1A18",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    minWidth: 140,
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF8F0",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1.2
  }
});

export default ElloraCavesScreen;