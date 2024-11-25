import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./pages/Home";
import { MediaList } from "./pages/MediaList";
import { NotFound } from "./pages/NotFound";
import { Welcome } from "../views/Welcome";
import { FormDataProvider } from "../hooks/contexts/FormContext";
import { LanguageProvider } from "../hooks/contexts/LanguageContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Media" component={MediaList} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <FormDataProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Layout"
              component={Layout}
              options={{ headerShown: false }}
            >
              {() => <MainTabs />}
            </Stack.Screen>
            <Stack.Screen
              name="NotFound"
              component={NotFound}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </FormDataProvider>
    </LanguageProvider>
  );
}
