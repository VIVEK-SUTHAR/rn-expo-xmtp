import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback } from "react";
import { RootStackScreenProps } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

const ConnectWallet = ({
  navigation,
}: RootStackScreenProps<"ConnectWallet">) => {
  const connecter = useWalletConnect();

  const connectWallet = useCallback(async () => {
    await connecter.connect();
    navigation.navigate("EnableXMTP", {
      ethAddress: connecter.accounts[0],
    });
  }, [connecter]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <Text style={styles.textStyle}>Connect Your Wallet to continue</Text>
      <Button title="Connect Wallet" onPress={connectWallet} />
    </SafeAreaView>
  );
};

export default ConnectWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    marginVertical: 16,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});
