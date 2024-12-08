import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionAgeProps {
  language: string;
  onDataChange: (age: string) => void;
}

export const QuestionAge: FC<QuestionAgeProps> = ({
  language,
  onDataChange,
}) => {
  const [isPressed, setIsPressed] = useState(null);

  const handleAgeChange = (value: string) => {
    if (value === "yes") {
      setIsPressed(true);
    }
    if (value === "no") {
      setIsPressed(false);
    }
    onDataChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formTranslate(language, "age")}</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={[styles.option, isPressed === true && styles.pressed]}
          onPress={() => handleAgeChange("yes")}
        >
          <Text style={styles.optionText}>
            {formTranslate(language, "age-options-y")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, isPressed === false && styles.pressed]}
          onPress={() => handleAgeChange("no")}
        >
          <Text style={styles.optionText}>
            {formTranslate(language, "age-options-n")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  options: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  pressed: {
    backgroundColor: "#700917",
  },
  option: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  optionText: {
    color: "#ffffb7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
