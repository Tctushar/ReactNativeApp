import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width } = Dimensions.get("window");
const Stack = createStackNavigator();
const About = () => {
  const imageUrl =
    "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg";
  return (
    <View style={styles.About}>
      {/* <View>
        <Text style={styles.heading}>About</Text>
      </View> */}
      <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="Home" component={About} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>

      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={styles.images}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "black",
    marginTop: 90,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "black",
    padding: 10,
    color: "white",
    marginBottom: 3,
  },
  images: {
    width: "auto",
    height: 600,
  },
});

export default About;
