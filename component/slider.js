import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
const { width } = Dimensions.get("window");
const NewsSlider = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        setNews(data.meals || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      {item.strMealThumb && (
        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.strMeal}</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`https://www.themealdb.com/meal/${item.idMeal}`);
        }}
      >
        <Text style={styles.link}>View Recipe</Text>
        <Text style={styles.newSlide}>Slide for more</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={styles.slider}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 20,
    height: 250,
  },
  newSlide: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 7,
    color: "#8252d1",
    fontWeight: "500",
  },
  slide: {
    width: width * 0.8,
    marginHorizontal: width * 0.1,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#eb6613",
    marginVertical: 7,
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    color: "#cc2557",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default NewsSlider;
