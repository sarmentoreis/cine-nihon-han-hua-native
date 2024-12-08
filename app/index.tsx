import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../views/Welcome";
import { Home } from "../views/Home";
import { FormDataProvider } from "../hooks/contexts/FormContext";
import { LanguageProvider } from "../hooks/contexts/LanguageContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LanguageProvider>
      <FormDataProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={Welcome} />

            <Stack.Screen name="Home" component={Home} />

            {/* <Stack.Screen name="MediaList" component={MediaList} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </FormDataProvider>
    </LanguageProvider>
  );
}
