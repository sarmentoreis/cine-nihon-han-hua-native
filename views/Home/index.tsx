import React from "react";
import { StyleSheet, View } from "react-native";
import { Form } from "../../components/Form";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
