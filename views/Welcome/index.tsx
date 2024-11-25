import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text, Alert } from "react-native";
import { animated } from "@react-spring/native";
import { useTransitionImgs } from "../../hooks/useTransitionsImgs";
import { useTransitionLogos } from "../../hooks/useTransitionLogos";
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";

const imgs = [
  require("../../assets/opening.jpg"),
  require("../../assets/fuji.jpg"),
  require("../../assets/korea.jpg"),
  require("../../assets/china.jpg"),
];
const logos = [
  require("../../assets/logo-ptbr.png"),
  require("../../assets/logo-jp.png"),
  require("../../assets/logo-kr.png"),
  require("../../assets/logo-ch.png"),
];

export const Welcome = (): JSX.Element => {
  const { transitions: transitionsImgs } = useTransitionImgs(imgs);
  const { transitions: transitionsLogos } = useTransitionLogos(logos);
  const [authenticated, setAuthenticated] = useState(false);
  const navigation = useNavigation();

  const handleBiometricAuth = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        Alert.alert(
          "Biometria não disponível",
          "Seu dispositivo não suporta biometria."
        );
        return;
      }
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (supportedTypes.length === 0) {
        Alert.alert(
          "Nenhum método de biometria suportado",
          "Nenhum método biométrico está disponível."
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
        Alert.alert("Falha na autenticação", "Não foi possível autenticar.");
      }
    } catch (error) {
      console.error("Erro na autenticação", error);
      Alert.alert("Erro", "Ocorreu um erro durante a autenticação.");
    }
  };

  if (!authenticated) {
    return (
      <View style={styles.container}>
        <animated.View style={styles.imgsWrapper}>
          {transitionsImgs((style, i) => (
            <animated.View key={i} style={[style, styles.imgs]}>
              <ImageBackground source={imgs[i]} style={styles.background}>
                {transitionsLogos((styleLogo, j) => (
                  <animated.View key={j} style={[styleLogo, styles.logos]}>
                    <ImageBackground source={logos[j]} style={styles.logo} />
                  </animated.View>
                ))}
              </ImageBackground>
            </animated.View>
          ))}
        </animated.View>
        <View style={styles.authButtonWrapper}>
          <Text onPress={handleBiometricAuth} style={styles.authButton}>
            Entrar
          </Text>
        </View>
      </View>
    );
  }

  return <Text>Você está autenticado! Redirecionando para a Home...</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  authPrompt: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  imgsWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  imgs: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logos: {
    width: "50%",
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  authButtonWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 150,
  },
  authButton: {
    backgroundColor: "#700917",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});
