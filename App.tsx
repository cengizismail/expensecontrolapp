import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home'
import { store } from "./src/config/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </Provider>
  );
}


