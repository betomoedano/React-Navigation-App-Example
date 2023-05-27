import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Feed />
    </NavigationContainer>
  );
}
