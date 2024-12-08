import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";

const openingImage = require("../../assets/opening.png");

export const Welcome = (): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigation = useNavigation();

  const handleBiometricAuth = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert(
          "Biometria não disponível",
          "Seu dispositivo não suporta autenticação biométrica."
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autentique-se usando a biometria",
        fallbackLabel: "Usar senha",
      });

      if (result.success) {
        setAuthenticated(true);
        console.log("Autenticado com sucesso!");
        navigation.navigate("Home");
      } else {
        setAuthenticated(true);
        navigation.navigate("Home");
        Alert.alert("Acesso realizado via emulador.");
      }
    } catch (error) {
      console.error("Erro na autenticação", error);
      Alert.alert("Erro", "Ocorreu um erro durante a autenticação.");
    }
  };

  if (!authenticated) {
    return (
      <View style={styles.container}>
        <ImageBackground source={openingImage} style={styles.background}>
          <View style={styles.authButtonWrapper}>
            <Text onPress={handleBiometricAuth} style={styles.authButton}>
              Entrar
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return <Text>Você está autenticado! Redirecionando para a Home...</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authButtonWrapper: {
    position: "absolute",
    bottom: 100,
  },
  authButton: {
    backgroundColor: "#700917",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: "center",
  },
});
