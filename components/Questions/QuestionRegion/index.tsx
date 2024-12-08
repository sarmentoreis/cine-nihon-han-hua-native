import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionRegionProps {
  language: string;
  onDataChange: (asian: boolean) => void;
}

export const QuestionRegion: React.FC<QuestionRegionProps> = ({
  language,
  onDataChange,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleRegionChange = (value: boolean) => {
    setIsSwitchOn(value);
    onDataChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formTranslate(language, "region")}</Text>
      <Switch
        value={isSwitchOn}
        onValueChange={handleRegionChange}
        thumbColor={isSwitchOn ? "#700917" : "#cccccc"}
        trackColor={{ false: "#d6d6d6", true: "#f4cccc" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    color: "#000",
    fontWeight: "bold",
  },
});
