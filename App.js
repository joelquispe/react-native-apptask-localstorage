
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { Provider as PaperProvider } from 'react-native-paper';
export default function App() {
  
  return (
    <PaperProvider>
    <Navigation></Navigation>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
