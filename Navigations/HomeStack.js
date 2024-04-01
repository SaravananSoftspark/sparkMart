import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import GroceryMainScreen from '../Screens/GroceryMainScreen';
import MobilesMainScreen from '../Screens/MobilesMainScreen';
import HomeApplianceMainScreen from '../Screens/HomeApplianceMainScreen';
import FurnituresMainScreen from '../Screens/FurnituresMainScreen';
import ToysMainScreen from '../Screens/ToysMainScreen';
import TravelsMainScreen from '../Screens/TravelsMainScreen';
import FashionsMainScreen from '../Screens/FashionsMainScreen';
import ElectronicsMainScreen from '../Screens/ElectronicsMainScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homes" component={HomeScreen} />
      <Stack.Screen name="GroceryMain" component={GroceryMainScreen} />
      <Stack.Screen name="MobilesMain" component={MobilesMainScreen} />
      <Stack.Screen name="HomeApplianceMain" component={HomeApplianceMainScreen} />
      <Stack.Screen name="FashionsMain" component={FashionsMainScreen} />
      <Stack.Screen name="ElectronicsMain" component={ElectronicsMainScreen} />
      <Stack.Screen name="FurnituresMain" component={FurnituresMainScreen} />
      <Stack.Screen name="ToysMain" component={ToysMainScreen} />
      <Stack.Screen name="TravelsMain" component={TravelsMainScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
