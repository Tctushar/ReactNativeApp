import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
const FoodEve = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const appId = "6b2b2d48";
    const appKey = "1dc0b0eb525744c067a2043e0b5696bc";
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.FoodEve}>
        <Text style={styles.title}>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.zone}>Zone</Text>
        </Text>

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.link}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search Items..."
        placeholderTextColor="white"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <TouchableOpacity style={styles.button} onPress={fetchRecipes}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <View style={styles.containers}>
        <FlatList //unique key for each item
          data={recipes} //Providing set of data
          keyExtractor={(item, index) => index.toString()} //key to string
          renderItem={(
            { item } //render data
          ) => (
            <View style={styles.recipee}>
              <Text
                style={{
                  fontSize: 12,
                  color: "orange",
                  width: 100,
                  marginBottom: 5,
                }}
              >
                {item.recipe.label}
              </Text>
              <Image source={{ uri: item.recipe.image }} style={styles.image} />
              <Text style={styles.calorie}>
                Calories: {Math.round(item.recipe.calories)}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    width: "100%",
    flex:1,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "blue",
    padding: 8,
    backgroundColor: "orange",
    width: "20%",
    borderRadius: 8,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 12,
  },
  containers: {
    height: 500,
    padding: 10,
 
  
  },
  recipeTitle: {
    fontSize: 15,
  },
  calorie: {
    color: "#bf4bac",
    fontSize: 10,
    marginBottom: 12,
  },
  searchInput: {
    color: "white",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 7,
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: "black",

  },
  recipeTitle: {
    marginTop: 11,
    marginBottom: 5,
    color: "#e89f20",
  },
  searchText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
  },
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
  foodAbove: {
    textAlign: "center",
    color: "white",
  },
  linksContainer: {
    flexDirection: "row",
  },
  food: {
    color: "orange",
  },
  zone: {
    color: "white",
  },
  link: {
    color: "white",
    fontSize: 18,
    marginLeft: 16,
  },
  slider: {
    height: "auto",
  },
  image: {
    width: 100,
    margin: 4,
    height: 100,
    backgroundColor: "lightblue",
  },
});

export default FoodEve;
