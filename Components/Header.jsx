import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
      <View style={styles.Header}>
        <Text style={{fontSize:24,fontWeight:'700',color:"white",textAlign:'center'}}>Hello!</Text>
      </View>
    );
}
const styles = StyleSheet.create({
Header: {
    width: "100%",
    height: 100,
    backgroundColor: "#0F52BA",
    marginTop: 50,
  }
});