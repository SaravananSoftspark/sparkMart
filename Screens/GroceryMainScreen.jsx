import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, } from "react-native";
import { Appbar } from "react-native-paper";
import groceryData from "../Data/GroceryMainData";

const GroceryMainScreen = ({ navigation }) => {
  const [product, setProduct] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ fontSize: 22, fontWeight: "600" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Grocery" />
      </Appbar.Header>
      <View>
          <Image resizeMode="cover" 
          source={{
                  uri: "https://rukminim2.flixcart.com/flap/50/50/image/15cbd99e6fcb6fc1.jpg?q=50",
                }} style={{ width: 400, height: 200 }}
          />
        </View>
        <View>
          <Text>Atta & Oils</Text>
        </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
          {groceryData.map(item => (
            <View key={item.id} style={styles.container}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={{ fontWeight: "500", fontSize: 12 }}>{item.name}</Text>
              <Text style={{ fontWeight: "700", fontSize: 12, color: "green" }}>
                Min. Off 50%
              </Text>
            </View>
          ))}
        </View>
        
      </ScrollView>
      {/* <View style={{ width: "100%", height: "100%" }}>
          <Image source={{
                  uri: "https://rukminim2.flixcart.com/flap/50/50/image/ed04b09381eec3f9.jpg?q=50",
                }}
          />
        </View> */}
      <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} >
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
          {groceryData.map(item => (
            <View key={item.id} style={styles.container}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={{ fontWeight: "500", fontSize: 12 }}>{item.name}</Text>
              <Text style={{ fontWeight: "700", fontSize: 12, color: "green" }}>
                Min. Off 50%
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GroceryMainScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  container: {
    height: 220,
    width: 200,
    padding: 0,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
  },
});
