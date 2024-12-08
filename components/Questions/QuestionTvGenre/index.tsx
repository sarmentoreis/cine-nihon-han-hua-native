import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionTvProps {
  language: string;
  onDataChange: (genre: string) => void;
}

export const QuestionTvGenre: React.FC<QuestionTvProps> = ({
  language,
  onDataChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleTvChange = (value: string) => {
    setSelectedValue(value);
    onDataChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formTranslate(language, "genre")}</Text>
      <RadioButton.Group onValueChange={handleTvChange} value={selectedValue}>
        <View style={styles.radioContainer}>
          <RadioButton value="10759|10765|9648|37|10768" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-curious-adventure")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="18|10766|10751|10762|16" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-sensitive-dreamer")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="80|99|10763|9648|10768" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-rational-investigator")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="35|10764|10767|16|10762" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-relaxed-sociable")}
          </Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  radioLabel: {
    fontSize: 13,
    color: "#000",
  },
});
