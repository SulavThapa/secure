import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./src/Routes/AppNavigator";

export default function App() {
  return (
    <AppNavigator
        style={styles.container}
     />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

console.disableYellowBox = true;
