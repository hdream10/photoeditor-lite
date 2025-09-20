import React from "react";
import { Text, StyleSheet } from "react-native";

const Main = () => {
  return (
    <>
      <Text style={styles.title}>Главная</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
  },
});

export default Main;
