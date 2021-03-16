import React, {useState} from 'react';

import {View, TextInput, StyleSheet, Button} from 'react-native';

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
      <Button onPress={() => {}} name="search" title="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    padding: 2,
    justifyContent: 'space-between',
  },

  input: {
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 12,
  },
});
