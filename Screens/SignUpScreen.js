import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, Text, TextInput } from "react-native-paper";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    mobilenumber: '',
    password: '',
    confirmpassword: ''
  });

  const handleValidation = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "* Username is required.";
    }
    if (!email) {
      newErrors.email = "* Email is required.";
    }
    if (!mobilenumber) {
      newErrors.mobilenumber = "* Mobile Numer is required.";
    }
    if (!password) {
      newErrors.password = "* Password is required.";
    }
    if (!confirmpassword) {
      newErrors.confirmpassword = "* Confirm Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      Alert.alert("Registered Successfully!!!", "Your account has been successfully registered.", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
      
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "white",
          textAlign: "left",
          marginTop: 40,
          padding: 10,
        }}
      >
        Create Account
      </Text>
      <View style={styles.mainContainer}>
        <View style={{ marginTop: 40 }}>
          <TextInput
            label="Username"
            mode="outlined"
            style={{ marginVertical: 10, marginHorizontal: 15, }}
            onChangeText={(text) => setUsername(text)}
          />
          {errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}
          <TextInput
            label="Email"
            mode="outlined"
            style={{ marginVertical: 10, marginHorizontal: 15, }}
            onChangeText={(text) => setEmail(text)}
          />
          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
          <TextInput
            label="Mobile Number"
            mode="outlined"
            style={{ marginVertical: 10, marginHorizontal: 15, }}
            onChangeText={(text) => setMobilenumber(text)}
          />
          {errors.mobilenumber ? <Text style={styles.error}>{errors.mobilenumber}</Text> : null}
          <TextInput
            label="Password"
            mode="outlined"
            style={{ marginVertical: 10, marginHorizontal: 15, }}
            onChangeText={(text) => setPassword(text)}
          />
          {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
          <TextInput
            label="Confirm Password"
            mode="outlined"
            style={{ marginVertical: 10, marginHorizontal: 15, }}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {errors.confirmpassword ? <Text style={styles.error}>{errors.confirmpassword}</Text> : null}
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={handleValidation}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "white",
                textAlign: "center",
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignUp}>
          <Text style={{ fontSize: 17, textAlign: "center", marginTop: 3 }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#0F52BA" }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F52BA",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "90%",
    height: "85%",
    backgroundColor: "#cccccc",
    borderRadius: 50,
  },
  error: {
    fontSize: 16,
    color: "red",
    marginLeft: 20,
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "#0F52BA",
    borderRadius: 10,
    height: 50,
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "center",
  },
  SignUp: {
    width: "100%",
    height: 30,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});
