import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { FontAwesome } from '@expo/vector-icons';


export default function EditProfileScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSaveProfile = () => {
    console.log("Profile saved:", { firstName, lastName, email, mobileNumber });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>

          <View style={styles.circle}>
            <Image
              resizeMode="cover"
              style={{ height: "100%", width: "100%" }}
              source={{
                uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </View>
          <View>
          <TouchableOpacity style={styles.changePictureIcon} onPress={() => console.log('Change Profile Picture')}>
            <FontAwesome name="camera" size={20} color="#0F52BA" />
            </TouchableOpacity>
          </View>
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="First Name"
          mode="flat"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          label="Last Name"
          mode="flat"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={styles.input}
        />
        <TextInput
          label="Email"
          mode="flat"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          label="Mobile Number"
          mode="flat"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSaveProfile} style={styles.button} labelStyle={styles.buttonLabel}>
          Save Profile
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F52BA",
    elevation: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: "#cccccc",
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
  },
  changePictureIcon: {
    position: 'absolute',
    bottom:0,
    left: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  inputContainer: {
    flex: 3,
    backgroundColor: "white",
  },
  input: {
    marginVertical: 10,
    backgroundColor: "white",
  },
  button: {
    marginTop: 50,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#0F52BA",
    borderRadius: 10,
  },
  buttonLabel: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
