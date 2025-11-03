import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { theme } from "@/shared/theme";
import { Navigation } from "./Navigation";
import { SQLConnectorProvider } from "@/core/SQLConnector";

const DATABASE_NAME = "photo_history.db";

const App = () => {
  return (
    <SafeAreaProvider>
      <SQLConnectorProvider databaseName={DATABASE_NAME}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <StatusBar style="light" />
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </SQLConnectorProvider>
    </SafeAreaProvider>
  );
};

export default App;
