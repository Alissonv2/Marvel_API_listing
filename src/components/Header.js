import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import logo from '../../assets/image/marvelLogo.png';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 60,
    backgroundColor: '#de041e',
    paddingRight: 5,
    alignItems: 'center',
  },

  logo: {
    width: 130,
    height: 40,
  },
});
