import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
const handlePress = () => {
  console.log("Clicked");
};
const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <View style={styles.header}>
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
        placeholder="Search your craving here..."
        placeholderTextColor="white"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <Text style={styles.foodAbove}></Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.slider}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?t=st=1729082334~exp=1729085934~hmac=ad56aa96f713db051d9b7052c6b586322ebc1dc901695e1acaabe1f587f80bab&w=740",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 35,
    width: "100%",
  },
  searchInput: {
    color: "black",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    borderRadius: 7,
    borderWidth: 1,
  },

  searchText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
  },
  header: {
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
  buttonText: {
    textAlign: "center",
    backgroundColor: "orange",
    padding: 7,
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: 400,
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Header;
