import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from "react-native";

const SlideScreen = () => {
  const ref = useRef(null);
  const noOfSlides = 6;
  const { width: windowWidth } = useWindowDimensions();
  const navigation = useNavigation();

  useEffect(() => {
    let x = windowWidth;

    const scrollFunction = () => {
      if (ref.current) {
        if (x > noOfSlides * windowWidth) {
          ref.current.scrollTo({ x: 0, animated: true });
          x = windowWidth;
        } else {
          ref.current.scrollTo({ x: x, animated: true });
          x += windowWidth;
        }
      }
    };

    const intervalId = setInterval(scrollFunction, 3000);

    return () => clearInterval(intervalId);
  }, [windowWidth]);

  const images = [
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9cea6b649d9c2fd6.png?q=20",
    },
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/076cd2a048e45a3a.jpg?q=20",
    },
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8f93c8d6e486e2a3.jpg?q=20",
    },
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ce35d6a15b063a9b.png?q=20",
    },
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3614e4f686524e06.jpg?q=20",
    },
    {
      src: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ec6cf773ae886bd7.jpg?q=20",
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled
          ref={ref}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => (
            <View style={{ width: windowWidth, height: 170 }} key={imageIndex}>
              <ImageBackground source={{ uri: image.src }} style={styles.card}>
                <View
                  style={{
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                  }}
                ></View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {images.map((_, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SlideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "Gainsboro",
  },
  scrollContainer: {
    height: 265,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  card: {
    top: 5,
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 12,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  normalDot: {
    height: 6,
    width: 10,
    borderRadius: 8,
    backgroundColor: "black",
    marginHorizontal: 5,
    marginBottom: 2,
    bottom: 70,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    position: "relative",
  },
});
