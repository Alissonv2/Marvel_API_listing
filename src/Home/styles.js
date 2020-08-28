import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      personCard: {
        flexDirection: 'row',
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: "#de041e",
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
      },

      textName: {
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold',
          marginLeft: 20,
          alignSelf: 'center'
      },

      avatar: {
          width: 80,
          height: 80,
          borderRadius: 40
      }
});

export default styles;