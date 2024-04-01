import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Appbar, Option } from "react-native-paper";
import groceryCategory from "../Data/GroceryCategoryData";

const GroceryScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (grocery) => {
    setSelectedCategory(grocery);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Appbar.Header>
          <Appbar.Content title="Grocery" titleStyle={{ fontWeight: "bold" ,color: "#2874F0"}}/>
        </Appbar.Header>
        <View style={styles.categoriesContainer}>
          {groceryCategory.map((grocery) => (
            <TouchableOpacity
              key={grocery.id}
              style={[styles.categoryItem]}
              onPress={() => handleCategorySelect(grocery.name)}
            >
              <Avatar.Image size={70} source={{ uri: grocery.image }} />
              <Text style={styles.categoryText}>{grocery.name}</Text>
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
    width: "48%",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default GroceryScreen;
