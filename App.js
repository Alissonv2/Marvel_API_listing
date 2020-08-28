import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';

import Home from './src/Home';
import logo from './assets/image/marvelLogo.png';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#de041e" />

      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de041e',
    paddingBottom: 10
  },

  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
  }

});