import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Linking } from "react-native";
 
const { width } = Dimensions.get("window");

const NewsSlider = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=food'
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <Text style={styles.link}>Read More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
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
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

export default NewsSlider;
