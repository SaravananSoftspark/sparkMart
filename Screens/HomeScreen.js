import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import { Appbar, Avatar, Icon, Searchbar } from "react-native-paper";
import SlideScreen from "./SliderScreen";
import { StyleSheet } from "react-native";
import OfferzoneScreen from "./OfferzoneScreen";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();

  const goToGroceryMainScreen = () => {
    navigation.navigate('GroceryMain');
  };

  const goToMobilesMainScreen = () => {
    navigation.navigate('MobilesMain');
  };

  const goToHomeApplianceMainScreen = () => {
    navigation.navigate('HomeApplianceMain');
  };

  const goToFashionsMainScreen = () => {
    navigation.navigate('FashionsMain');
  };

  const goToElectronicsMainScreen = () => {
    navigation.navigate('ElectronicsMain');
  };

  const goToFurnituresMainScreen = () => {
    navigation.navigate('FurnituresMain');
  };

  const goToToysMainScreen = () => {
    navigation.navigate('ToysMain');
  };

  const goToTravelsMainScreen = () => {
    navigation.navigate('TravelsMain');
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle= "light-content" hidden={false} backgroundColor={"#2874F0"} translucent={false} />
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="SparkMarket" titleStyle={{ fontSize: 22, fontWeight: "bold", color:"#FAD400"}} />
        <Appbar.Action
          icon="bell" color="white"
          onPress={() => console.log("Notification icon pressed")}
        />
        <View style={styles.searchBarContainer}>
        <Searchbar placeholder="Search" style={styles.searchBar} />
        <Icon />
      </View>
      </Appbar.Header>

      <ScrollView 
        contentContainerStyle={styles.scrollViewContent} 
        showsVerticalScrollIndicator={false}
      >
        <SlideScreen />
        <View style={{ marginTop: -70 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View>
            <TouchableOpacity onPress={goToGroceryMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg",
                }}
              />
              <Text style={{alignSelf: "center"}}>Grocery</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToMobilesMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg",
                }}
              />
              <Text style={{alignSelf: "center"}}>Mobiles</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToHomeApplianceMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
                }}
              />
              <Text style={{alignSelf: "center"}}>Home Appliance</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToFashionsMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://img.freepik.com/free-photo/fashion-photo-handsome-elegant-man-glasses-suit-with-beautiful-sexy-woman-colorful-dress-white_158538-11280.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=ais",
                }}
              />
              <Text style={{alignSelf: "center"}}>Fashions</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <View>
            <TouchableOpacity onPress={goToElectronicsMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ=",
                }}
              />
              <Text style={{alignSelf: "center"}}>Electronics</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToFurnituresMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
                }}
              />
              <Text style={{alignSelf: "center"}}>Furnitures</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToToysMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
                }}
              />
              <Text style={{alignSelf: "center"}}>Toys&Babycare</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity onPress={goToTravelsMainScreen}>
              <Avatar.Image
                size={70}
                source={{
                  uri: "https://flightbannermob.imgix.net/india/air-india/air-india-eco.jpg",
                }}
              />
              <Text style={{alignSelf: "center"}}>Travels</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.Offerzone}>
            <Text style={{ fontWeight: "700", fontSize: 24, marginTop: 10, paddingLeft: 10, alignSelf: "flex-start", color: "white" }}>
              Offer Zone
            </Text>
            <OfferzoneScreen />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appBar: {
    zIndex: 2,
    backgroundColor: "#0F52BA",
  },
  searchBarContainer: {
    position: "absolute",
    top: 64,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  searchBar: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#cccccc",
    borderRadius: 15,
  },
  scrollViewContent: {
    paddingTop: 55,
  },
  Offerzone: {
    flex: 1,
    width: "100%",
    height: "100",
    alignItems: "center",
    backgroundColor: "#1BE0FF",
    borderRadius: 30,
  },
  card: {
      width: "40%",
      height: 180,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
  },
  cardMain: {
    columnGap: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardCover: {
    marginBottom: 20,
  },
});
