import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = ({ content, type, onPress }) => {
  const backgroundColor = type === "primary" ? "#171a20cc" : "white";
  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
