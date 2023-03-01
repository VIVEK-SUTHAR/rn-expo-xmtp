import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import WalletConnectProvider from "@walletconnect/web3-provider";
const EnableXMTP = ({ route }: RootStackScreenProps<"EnableXMTP">) => {
  const connector = useWalletConnect();
  const enableDM = async () => {
    const WCProvider = new WalletConnectProvider({
      infuraId: "aeee6f387f284ac99aae9a7124b4a187",
      connector: connector,
    });
    await connector.connect();
    await WCProvider.enable();
    const provider = new ethers.providers.Web3Provider(WCProvider);
    const signer = provider.getSigner();
    try {
      const client = await Client.create(signer, { env: "dev" });
      console.log(client);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>
        Connected to : {connector.accounts[0]}
      </Text>
      <Button title="Enable XMTP" onPress={enableDM} />
    </SafeAreaView>
  );
};

export default EnableXMTP;

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
    fontWeight: "500",
  },
});
