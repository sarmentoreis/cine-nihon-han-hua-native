import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionMovieProps {
  language: string;
  onDataChange: (genre: string) => void;
}

export const QuestionMovieGenre: React.FC<QuestionMovieProps> = ({
  language,
  onDataChange,
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleMovieChange = (value: string) => {
    setSelectedValue(value);
    onDataChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{formTranslate(language, "genre")}</Text>
      <RadioButton.Group
        onValueChange={handleMovieChange}
        value={selectedValue}
      >
        <View style={styles.radioContainer}>
          <RadioButton value="28|12|878|14|53" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-visionary-adventure")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="18|10749|10402|10751|36" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-emotional-dreamer")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="80|9648|99|10752|27" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-analytical-investigator")}
          </Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="35|16|37|10770|10751" />
          <Text style={styles.radioLabel}>
            {formTranslate(language, "genre-options-relaxed-spirit")}
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
