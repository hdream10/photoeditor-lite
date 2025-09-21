import React from "react";
import { Image, StyleSheet, View as ReactNativeView } from "react-native";

type TProps = {
  photoSrc: string;
};

const DisplayPhoto = ({ photoSrc }: TProps) => {
  return (
    <ReactNativeView style={styles.container}>
      <Image source={{ uri: photoSrc }} style={styles.image} />
    </ReactNativeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  placeholderText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default DisplayPhoto;
