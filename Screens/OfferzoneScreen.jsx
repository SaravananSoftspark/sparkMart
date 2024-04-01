import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Card, Text, } from "react-native-paper";


export default function OfferzoneScreen({ navigation }) {
  return (
    <ScrollView>
        <View style={{ flexDirection: "row", columnGap: 20, marginTop: 10 }}>
      <View style={styles.container}>
        <Image source={{
                  uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} style={styles.image}  />
                <Text style={{ fontWeight: "500", fontSize: 18, }}>Pen Drives</Text>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "green", }}>Min. Off 50%</Text>
      </View>
      <View style={styles.container}>
        <Image source={{
                  uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} style={styles.image} />
                <Text style={{ fontWeight: "500", fontSize: 18, }}>Pen Drives</Text>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "green", }}>Min. Off 50%</Text>
      </View>
      </View>
      <View style={{ flexDirection: "row", columnGap: 20, marginTop: 10 }}>
      <View style={styles.container}>
        <Image source={{
                  uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} style={styles.image} />
                <Text style={{ fontWeight: "500", fontSize: 18, }}>Pen Drives</Text>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "green", }}>Min. Off 50%</Text>
      </View>
      <View style={styles.container}>
        <Image source={{
                  uri: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }} style={styles.image} />
                <Text style={{ fontWeight: "500", fontSize: 18, }}>Pen Drives</Text>
                <Text style={{ fontWeight: "700", fontSize: 18, color: "green", }}>Min. Off 50%</Text>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  card: {
    width: 160,
    height: 40,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
