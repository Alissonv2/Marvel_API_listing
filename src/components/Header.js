import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import logo from '../../assets/image/marvelLogo.png';

export default function Header() {
  Icon.loadFont();
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Icon name="search" size={40} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
