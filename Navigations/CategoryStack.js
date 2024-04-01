import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../Screens/CategoryScreen";
import GroceryScreen from "../Screens/GroceryScreen";

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="All Categories" component={CategoryScreen} />
    
    </Stack.Navigator>
  );
};

export default CategoryStack;
