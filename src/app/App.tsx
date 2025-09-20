import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
