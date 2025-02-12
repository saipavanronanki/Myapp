import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../app/tabs navigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
