import { CameraControl } from "@/widgets/CameraControl";
import { Text, StyleSheet } from "react-native";

const Main = () => {
  return (
    <>
      <Text style={styles.title}>Главная</Text>
      <CameraControl />
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
