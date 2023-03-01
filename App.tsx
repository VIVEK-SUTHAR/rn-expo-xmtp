import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import ConnectWallet from "./screens/ConnectWallet";
import EnableXMTP from "./screens/EnableXMTP";
import "./polyfills";

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="black" style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ConnectWallet"
              component={ConnectWallet}
              options={{
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitle: "Connect Wallet",
              }}
            />
            <Stack.Screen
              name="EnableXMTP"
              component={EnableXMTP}
              options={{
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitle: "Enable XMTP",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
