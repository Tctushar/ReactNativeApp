import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width } = Dimensions.get("window");

const About = () => {
  const imageUrl =
    "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Inside About Page</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
});

export default About;
