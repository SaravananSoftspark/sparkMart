import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Entypo } from "@expo/vector-icons";
import ProfileScreen from "../Screens/ProfileScreen";
import EditProfileScreen from "../Screens/EditProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#0F52BA',
            },
            headerTintColor: '#fff',
          }}/>
    </Stack.Navigator>
  );
};

export default ProfileStack;
