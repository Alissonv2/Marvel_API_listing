import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Header from './src/components/Header';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#de041e" />

      <Header />
      <SafeAreaView style={styles.container}>
        <AppRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});
