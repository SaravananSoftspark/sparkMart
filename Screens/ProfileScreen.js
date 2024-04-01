import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };
  const goToEditProfileScreen = () => {
    navigation.navigate("EditProfile");
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.circle}>
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </View>
      <View>
        <View style={{ marginTop: 120 }}>
          <View>
            <Text style={styles.Header}>GENERAL</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={goToEditProfileScreen}
            >
              <FontAwesome6 name="user-pen" style={styles.icon} size={24} />
              <Text style={styles.option}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <FontAwesome6 name="wallet" size={24} style={styles.icon} />
              <Text style={styles.option}>Saved Cards & Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <Entypo name="location" size={24} style={styles.icon} />
              <Text style={styles.option}>Saved Addresses</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <MaterialIcons name="language" size={24} style={styles.icon} />
              <Text style={styles.option}>Select Languages</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <MaterialIcons
                name="notifications"
                size={24}
                style={styles.icon}
              />
              <Text style={styles.option}>Notification Settings</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.Header}>ABOUT APP</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <MaterialCommunityIcons
                name="information"
                size={24}
                style={styles.icon}
              />
              <Text style={styles.option}>About App</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <Ionicons name="shield-checkmark" size={24} style={styles.icon} />
              <Text style={styles.option}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <Ionicons name="newspaper" size={24} style={styles.icon} />
              <Text style={styles.option}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={(event) => {}}
            >
              <FontAwesome
                name="question-circle"
                size={24}
                style={styles.icon}
              />
              <Text style={styles.option}>Help & Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={goToLoginScreen}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
                color: "white",
                textAlign: "center",
              }}
            >
              LogOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  Header: {
    fontWeight: "600",
    fontSize: 22,
    paddingLeft: 10,
    padding: 5,
    marginBottom: 5,
    marginTop: 20,
    backgroundColor: "#cccccc",
  },
  option: {
    width: "85%",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 0,
    padding: 15,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  input: {
    width: "90%",
    margin: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  circle: {
    width: 100,
    height: 100,
    marginTop: 0,
    borderWidth: 5,
    borderColor: "#cccccc",
    borderRadius: 50,
    overflow: "hidden",
    position: "absolute",
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
  icon: {
    color: "#303230",
    padding: 15,
  },
});
