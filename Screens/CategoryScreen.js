import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable, option, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import GroceryScreen from "./GroceryScreen";
import MobilesScreen from "./MobilesScreen";
import HomeApplianceScreen from "./HomeApplianceScreen";
import ElectronicsScreen from "./ElectroincsScreen";
import FashionsScreen from "./FashionsScreen";
import FurnituresScreen from "./FurnituresScreen";
import ToysScreen from "./ToysScreen";
import TravelsScreen from "./TravelsScreen";

const CategoryScreen = () => {
  const [option, setOption] = useState("Grocery");

  const categoryData = [
    {
      id: 0,
      image:
        "https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg",
      name: "Grocery",
    },
    {
      id: 1,
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
      name: "Mobiles",
    },
    {
      id: 2,
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
      name: "HomeAppliance",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=",
      name: "Electronics",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/fashion-photo-handsome-elegant-man-glasses-suit-with-beautiful-sexy-woman-colorful-dress-white_158538-11280.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=ais",
      name: "Fashions",
    },
    {
      id: 5,
      image:
        "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      name: "Furnitures",
    },
    {
      id: 6,
      image:
        "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      name: "Toys",
    },
    {
      id: 7,
      image:
        "https://flightbannermob.imgix.net/india/air-india/air-india-eco.jpg",
      name: "Travels",
    },
  ];

  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView style={{ flex: 1, width: "30%" }} showsVerticalScrollIndicator={false}>
        <View style={styles.menu}>
          {categoryData.map((category, index) => {
            return (
              <TouchableOpacity
              style={[
                styles.menuItem,
                option === category.name ? styles.selectedMenuItem : null,
              ]}
                onPress={() => setOption(category.name)}
                key={category.id}
              >
                <Avatar.Image
                  size={70}
                  source={{
                    uri: category.image
                  }}
                />
                <Text style={styles.menuItemText}>{category.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={{ flex: 2.5, width: "65%" }}>
        {option === "Grocery" && <GroceryScreen />}
        {option === "Mobiles" && <MobilesScreen />}
        {option === "HomeAppliance" && <HomeApplianceScreen />}
        {option === "Electronics" && <ElectronicsScreen />}
        {option === "Fashions" && <FashionsScreen />}
        {option === "Furnitures" && <FurnituresScreen />}
        {option === "Toys" && <ToysScreen />}
        {option === "Travels" && <TravelsScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    backgroundColor: "#cccccc",
    alignItems: "center",
    borderColor: "black",
  },
  menuItem: {
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    height: 110,
    width: 115,
    marginBottom: 0,
  },
  menuItemText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  selectedMenuItem: {
    backgroundColor: "white",
  },
});

export default CategoryScreen;
