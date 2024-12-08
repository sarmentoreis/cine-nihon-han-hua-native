import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { formTranslate } from "../../../utils/FormTranslation";

interface QuestionReleaseDateProps {
  language: string;
  mediaType: string | null;
  onDataChange: (releaseYear: string) => void;
}

export const QuestionReleaseDate: React.FC<QuestionReleaseDateProps> = ({
  language,
  mediaType,
  onDataChange,
}) => {
  const currentYear = new Date().getFullYear();
  const initialValue = mediaType === "movie" ? 1900 : 1935;
  const [sliderValue, setSliderValue] = useState<number>(initialValue);

  const handleReleaseDateChange = (value: number) => {
    setSliderValue(value);
    onDataChange(value.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {formTranslate(language, `release-${mediaType}`)}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={mediaType === "movie" ? 1900 : 1935}
        maximumValue={currentYear}
        step={10}
        value={sliderValue}
        onValueChange={handleReleaseDateChange}
        minimumTrackTintColor="#700917"
        maximumTrackTintColor="#cccccc"
        thumbTintColor="#700917"
      />
      <Text style={styles.valueLabel}>{sliderValue}</Text>
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
  slider: {
    width: 400,
    height: 40,
  },
  valueLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "#000",
    marginTop: 8,
  },
});
