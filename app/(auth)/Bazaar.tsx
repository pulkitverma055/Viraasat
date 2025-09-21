import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const bazaars = [
  {
    id: "1",
    name: "Jaipur Handicraft Bazaar",
    location: "Jaipur, Rajasthan",
    image: require("../../assets/images/jaipur_bazar.jpeg"),
  },
  {
    id: "2",
    name: "Dilli Haat",
    location: "Delhi",
    image: require("../../assets/images/dilli_haat.jpg"),
  },
  {
    id: "3",
    name: "Shilparamam",
    location: "Hyderabad, Telangana",
    image: require("../../assets/images/shilparamam.jpg"),
  },
  {
    id: "4",
    name: "Laad Bazaar",
    location: "Hyderabad, Telangana",
    image: require("../../assets/images/Laad_Bazaar.jpg"),
  },
];

export default function BazaarScreen() {
  const router = useRouter();

  const renderBazaar = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/bazaar/${item.id}`)}
    >
      <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 15 }}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>
            <FontAwesome name="map-marker" size={16} color="#fff" /> {item.location}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4B2E83" />
      
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#6B1A1A" />
        </TouchableOpacity>
        <Text style={styles.header}>Cultural Bazaars</Text>
      </View>

      <FlatList
        data={bazaars}
        renderItem={renderBazaar}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0", // deep purple theme
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6B1A1A",
    textAlign: "center",
    flex: 1,
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: width - 32,
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  location: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
});
