import React, { useContext, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Snackbar } from "react-native-paper";
import { LanguageContext } from "../../hooks/contexts/LanguageContext";
import { formTranslate } from "../../utils/FormTranslation";
import { errorTranslate } from "../../utils/ErrorTranslation";
import { useNavigation } from "@react-navigation/native";
import { FormDataContext, IFormData } from "../../hooks/contexts/FormContext";
import { QuestionDiscovery } from "../Questions/QuestionDiscovery";
import { useDiscoveryQuestion } from "../../hooks/useDiscoveryQuestion";
import { QuestionAge } from "../Questions/QuestionAge";
import { QuestionMovieGenre } from "../Questions/QuestionMovieGenre";
import { QuestionTvGenre } from "../Questions/QuestionTvGenre";
import { QuestionReleaseDate } from "../Questions/QuestionReleaseDate";
import { QuestionRegion } from "../Questions/QuestionRegion";

export const Form = () => {
  const { language } = useContext(LanguageContext);
  const { discoveryResponse, handleDiscoveryChange } = useDiscoveryQuestion();
  const formContext = useContext(FormDataContext);
  const { formData, setFormData } = formContext || {};
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleDataChange = (data: Partial<IFormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const handleSubmit = () => {
    if (!formData.discovery) {
      setSnackbarMessage(errorTranslate(language, "discovery"));
      setVisible(true);
      return;
    }
    if (formData.age === null) {
      setSnackbarMessage(errorTranslate(language, "age"));
      setVisible(true);
      return;
    }
    if (!formData.genre) {
      setSnackbarMessage(errorTranslate(language, "genre"));
      setVisible(true);
      return;
    }
    if (!formData.releaseYear) {
      setSnackbarMessage(errorTranslate(language, "release"));
      setVisible(true);
      return;
    }

    navigation.navigate("Media");
  };

  return (
    <View style={styles.container}>
      <QuestionDiscovery
        language={language}
        onDiscoveryChange={handleDiscoveryChange}
        onDataChange={(value) => handleDataChange({ discovery: value })}
      />
      <QuestionAge
        language={language}
        onDataChange={(value) =>
          handleDataChange({ age: value === "yes" ? true : false })
        }
      />
      {discoveryResponse === "movie" && (
        <QuestionMovieGenre
          language={language}
          onDataChange={(value) => handleDataChange({ genre: value })}
        />
      )}
      {discoveryResponse === "tv" && (
        <QuestionTvGenre
          language={language}
          onDataChange={(value) => handleDataChange({ genre: value })}
        />
      )}
      <QuestionReleaseDate
        language={language}
        mediaType={discoveryResponse}
        onDataChange={(value) =>
          handleDataChange({ releaseYear: value, decade: Number(value + 10) })
        }
      />
      <QuestionRegion
        language={language}
        onDataChange={(value) => handleDataChange({ asian: value })}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title={formTranslate(language, "btn-submit")}
          onPress={handleSubmit}
          color="#700917"
        />
      </View>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={Snackbar.DURATION_SHORT}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffb7",
  },
  buttonWrapper: {
    marginTop: 20,
    width: "100%",
  },
});
