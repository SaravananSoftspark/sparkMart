import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTab } from './Navigations/BottomTabs';
import HomeScreen from './Screens/HomeScreen';
import CategoryStack from './Navigations/CategoryStack';
import ProfileStack from './Navigations/ProfileStack';
import CartStack from './Navigations/CartStack';
import HomeStack from './Navigations/HomeStack';
import { Entypo, MaterialIcons, FontAwesome6 } from '@expo/vector-icons'; 
import { KeyboardAvoidingView } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard:true}}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon: ({focused, color}) => (<Entypo name="home" size={30} color="black" />)}}/>
      <Tab.Screen name="Category" component={CategoryStack} options={{tabBarIcon: ({focused, color}) => (<MaterialIcons name="category" size={30} color="black" />)}}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: ({focused, color}) => (<FontAwesome6 name="user-large" size={25} color="black" />)}}/>
      <Tab.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({focused, color}) => (<Entypo name="shopping-cart" size={30} color="black" />)}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignUpScreen}/> 
          <Stack.Screen name="HomeMain" component={MainTabNavigator} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
