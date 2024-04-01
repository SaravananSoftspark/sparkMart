import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Appbar, Option } from "react-native-paper";

const HomeApplianceScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    {
      id: 1,
      image: "data:image/jpeg;base64,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",
      name: "Split ACs",
    },
    {
      id: 2,
      image: "data:image/jpeg;base64,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",
      name: "Window ACs",
    },
    {
      id: 3,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/1/s/-original-imagwu89jy5ems28.jpeg?q=70",
      name: "Redmi Mobiles",
    },
    {
      id: 4,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
      name: "Google Pixel Mobiles",
    },
    {
      id: 5,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/j/-original-imagybz8gbfsaevs.jpeg?q=70",
      name: "Oppo Mobiles",
    },
    {
      id: 6,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
      name: "Vivo Mobiles",
    },
    {
      id: 7,
      image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/n/-original-imagymhwtgmdr3v2.jpeg?q=70",
      name: "Samsung Mobiles",
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Appbar.Header>
          <Appbar.Content title="Home Appliance" titleStyle={{ fontWeight: "bold" ,color: "#2874F0"}} />
        </Appbar.Header>
        <View style={{backgroundColor:"white"}}><Text style={{fontSize:20, fontWeight:"500", padding: 20,}}>Air Conditioners</Text></View>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryItem]}
              onPress={() => handleCategorySelect(category.name)}
            >
              <Avatar.Image size={70}  source={{ uri: category.image }} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{backgroundColor:"white"}}><Text style={{fontSize:20, fontWeight:"500", padding: 20,}}>Refrigerators</Text></View>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryItem]}
              onPress={() => handleCategorySelect(category.name)}
            >
              <Avatar.Image size={70}  source={{ uri: category.image }} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  categoryItem: {
    alignItems: "center",
    marginBottom: 20,
    width: "30%",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default HomeApplianceScreen;
