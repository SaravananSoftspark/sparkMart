// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../Screens/HomeScreen";
// import ProfileStack from "./ProfileStack";
// import { Entypo, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
// import CategoryStack from "./CategoryStack";
// import CartStack from "./CartStack";


// const Tab = createBottomTabNavigator();

// export function BottomTab() {
//     return (
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//           <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused, color}) => (<Entypo name="home" size={30} color="black" />)}}/>
//           <Tab.Screen name="Category" component={CategoryStack} options={{tabBarIcon: ({focused, color}) => (<MaterialIcons name="category" size={30} color="black" />)}}/>
//           <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: ({focused, color}) => (<FontAwesome6 name="user-large" size={25} color="black" />)}}/>
//           <Tab.Screen name="Cart" component={CartStack} options={{tabBarIcon: ({focused, color}) => (<Entypo name="shopping-cart" size={30} color="black" />)}}/>
//         </Tab.Navigator>
//     );
//   }