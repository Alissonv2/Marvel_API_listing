import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import logo from '../../assets/image/marvelLogo.png';

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
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    backgroundColor: '#de041e',
    paddingRight: 5,
  },

  logo: {
    width: 100,
    height: 40,
  },
});
