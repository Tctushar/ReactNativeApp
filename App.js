import React from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
const handleSearch = () => {
  // search logic here
};

const Header = () => {
  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      {/* Original Header with Text Links */}
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.zone}>Zone</Text>
        </Text>
        {/* Search Button */}

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.link}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchText}>Search your craving here...</Text>
      </TouchableOpacity>
      <Text style={styles.foodAbove}></Text>
      {/* Image Slider Section */}
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

  searchButton: {
    backgroundColor: "black",
    width: "90%",
    color: "blue",
    border: "none",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 13,
  },

  searchText: {
    color: "white",
    textAlign: "center",
    borderBlockColor: "yellow",
    fontSize: 14,
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
  image: {
    width: 400,
    // height: 300,
    // marginRight: 16,
    // borderRadius: 10,
    // resizeMode:'cover'
    // // justifyContent:'space-evenly'
    flex: 1,
    // width: '100%',
    // height: '100%',
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Header;