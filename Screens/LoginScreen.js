import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // const handleLogin = () => {
  //     if(username === 'user' && password === 'password') {
  //         Alert.alert('Login Successful', 'Welcome!');
  //       } else {
  //         Alert.alert('Login Failed', 'Invalid username or password');
  //       }
  //     };

  const handleValidation = () => {
    if ((!username, !password)) {
      setError("* Enter your Username & password");
    } else if (username === "Saravanan" && password === "Sara123") {
      Alert.alert("Login Successful", "Welcome!", [
        { text: "OK", onPress: () => navigation.navigate("HomeMain") },
      ]);
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={"white"}
        translucent={true}
      />
      <View style={styles.Header}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            color: "#FAD400",
            textAlign: "center",
          }}
        >
          Spark Mart
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.welcomeheading}>
          <View style={styles.circle}>
            <Image
              resizeMode="cover"
              style={{ height: "100%", width: "100%", borderRadius: 10 }}
              source={{
                uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </View>
          <Text style={styles.welcomStyle}>Welcome!</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor={"gray"}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor={"gray"}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity onPress={(event) => {}}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
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
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignUp}>
          <Text style={{ fontSize: 17, textAlign: "center", marginTop: 3 }}>
            New Register?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#0F52BA",
              }}
            >
              SignUp Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F52BA",
    alignItems: "center",
    justifyContent: "center",
  },
  Header: {
    width: "100%",
    height: 100,
    backgroundColor: "#0F52BA",
    marginTop: 50,
  },
  mainContainer: {
    width: "90%",
    height: "75%",
    backgroundColor: "#cccccc",
    borderRadius: 50,
  },
  welcomeheading: {
    width: "100%",
    height: 100,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 50,
    overflow: "hidden",
    position: "absolute",
    top: -50,
  },
  welcomStyle: {
    fontWeight: "700",
    fontSize: 24,
    marginTop: 50,
    position: "absolute",
    bottom: 0,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
  },
  inputText: {
    height: 40,
    backgroundColor: "white",
    color: "black",
  },
  error: {
    width: "80%",
    height: 27,
    fontSize: 18,
    marginTop: -10,
    fontWeight: "500",
    color: "#DD0011",
    justifyContent: "center",
    alignSelf: "center",
  },
  forgot: {
    width: "80%",
    height: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "#0F52BA",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "#0F52BA",
    borderRadius: 10,
    height: 50,
    alignSelf: "center",
    marginTop: 40,
    justifyContent: "center",
  },
  SignUp: {
    width: "100%",
    height: 25,
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    flexDirection: "row",
  },
});
