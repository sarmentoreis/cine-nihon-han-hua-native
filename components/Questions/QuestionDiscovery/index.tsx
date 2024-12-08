import React, { FC, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionDiscoveryProps {
  language: string;
  onDiscoveryChange: (value: string) => void;
  onDataChange: (discovery: string) => void;
}

export const QuestionDiscovery: FC<QuestionDiscoveryProps> = ({
  language,
  onDiscoveryChange,
  onDataChange,
}) => {
  const [isPressed, setIsPressed] = useState(null);

  const handleDiscoveryChange = (value: string) => {
    if (value === "movie") {
      setIsPressed(true);
    }
    if (value === "tv") {
      setIsPressed(false);
    }
    onDiscoveryChange(value);
    onDataChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formTranslate(language, "discovery")}</Text>
      <View style={styles.options}>
        <TouchableOpacity
          style={[styles.option, isPressed === true && styles.pressed]}
          onPress={() => handleDiscoveryChange("movie")}
        >
          <Text style={styles.optionText}>
            {formTranslate(language, "discovery-options-movie")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, isPressed === false && styles.pressed]}
          onPress={() => handleDiscoveryChange("tv")}
        >
          <Text style={styles.optionText}>
            {formTranslate(language, "discovery-options-tv")}
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
    backgroundColor: "#ffffb7",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
    borderWidth: 2,
    alignItems: "center",
  },
  optionText: {
    color: "#ffffb7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
