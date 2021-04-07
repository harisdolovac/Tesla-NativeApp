import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../styledButton/Index";
import styles from "./styles";

const Index = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/Home.jpg")}
        style={styles.imageHome}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at 69,000$</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Coustom order"}
        onPress={() => {
          console.log("order was pressd");
        }}
      />
      <StyledButton
        type="secundery"
        content={"Existing inventory"}
        onPress={() => {
          console.log("existing inventory was pressd");
        }}
      />
    </View>
  );
};

export default Index;
