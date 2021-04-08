import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../styledButton/Index";
import styles from "./styles";

const Index = ({ name, tagLine, image, tagLineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.imageHome} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}> {tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default Index;
