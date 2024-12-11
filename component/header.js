import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {  
  return (
    <View style={styles.FoodEve}>
      <Text style={styles.title}>
        <Text style={styles.food}>Food</Text>
        <Text style={styles.zone}>Zone</Text>
      </Text>
      <View style={styles.linksContainer}>
        {/* Removed the empty TouchableOpacity or added text */}
        <TouchableOpacity onPress={() => navigation.about("About")}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FoodEve: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  food: {
    color: "orange",
  },
  zone: {
    color: "white",
  },
  linksContainer: {
    flexDirection: "row",
  },
  link: {
    color: "white",
    fontSize: 18,
    marginLeft: 16,
  },
});