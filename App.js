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
import Header from "./component/header";
import { API_KEYS } from "./config";
import NewsSlider from "./component/slider";
const FoodEve = (navigation) => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_KEYS.appId}&app_key=${API_KEYS.appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        {""}
        <Header />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Items..."
        placeholderTextColor="white"
        value={query}
        onChangeText={(text) => setQuery(text)}scrollEnabled
      />
      <TouchableOpacity style={styles.button} onPress={fetchRecipes}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <View style={styles.containers}>
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.recipee}>
              <Image source={{ uri: item.recipe.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    color: "#c75d0c",
                  }}
                >
                  {""}
                  Details:
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: "orange",
                    width: "100%",
                    marginBottom: 5,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Name: {item.recipe.label}{" "}
                </Text>

                <Text style={styles.calorie}>
                  Calories: {Math.round(item.recipe.calories)}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#b35968",
                    fontSize: 15,
                    margin: 1,
                  }}
                >
                  Ingredients:
                </Text>
                <Text style={styles.details}>
                  {item.recipe.ingredientLines.join(", ")}
                </Text>
                <Text style={styles.details}>
                  Total Time:{""}
                  {item.recipe.totalTime
                    ? `${item.recipe.totalTime} minutes`
                    : "N/A"}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ marginVertical: 20 }}>{/* <About /> */}</View>
      <NewsSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    width: "100%",
    flexDirection: "column",
  },
  details: {
    color: "#c47e89",
    marginBottom: 10,
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
    marginTop: 10,
    backgroundColor: "#f5f5f5 ",
    flexDirection: "column",
  },
  recipee: {
    width: "100%",
    backgroundColor: "#edf2f5",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  recipeTitle: {
    fontSize: 17,
  },
  calorie: {
    color: "#bf4bac",
    fontSize: 16,
    marginBottom: 12,
    width: "100%",
    textAlign: "center",
  },
  searchInput: {
    color: "#121212",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 7,
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: "white",
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

  foodAbove: {
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 150,
    borderRadius: 5,
    height: 150,
    objectFit: "contain",
    margin: 10,
  },
});

export default FoodEve;
