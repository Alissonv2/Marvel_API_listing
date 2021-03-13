import React, {useState} from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

export default function SearchBar(props) {
  const [personName, setPersonName] = useState();

  const {name} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        /* onChangeText={} */

        placeholder="Digite o nome de um personagem"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 40,
    padding: 2,
  },

  input: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 12,
  },
});
