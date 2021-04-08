import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import CarItem from "./components/CarItem/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model 3"}
        tagLine={"Order online for"}
        image={require("./assets/Home.jpg")}
        tagLineCTA={"Touchless delivery"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
