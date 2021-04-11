import React, {useState, useEffect} from 'react';
import {Text, FlatList, Image, TouchableOpacity, View} from 'react-native';

import {publicKey, timestamp, hash} from '../../utils/keys';
import SearchBar from '../../components/SearchBar';

import styles from './styles';
import api from '../../services/api';

export default function Home() {
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    async function handlePerson() {
      try {
        const response = await api.get(
          `characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${publicKey}&hash=${hash.hex()}`,
        );

        const {results} = response.data.data;
        setPerson(results);
      } catch (error) {
        console.log(error);
      }
    }

    handlePerson();
  }, []);

  const searchPersonForName = () => {};

  const renderItem = ({item: person}) => (
    <TouchableOpacity style={styles.personCard} onPress={() => {}}>
      <Image
        style={styles.avatar}
        source={{uri: `${person.thumbnail.path}.${person.thumbnail.extension}`}}
      />
      <View style={styles.containerText}>
        <Text style={styles.textName}>{person.name}</Text>
        {person.description ? (
          <Text numberOfLines={3} style={styles.textDescription}>
            {person.description}
          </Text>
        ) : (
          <Text style={styles.textDescription}>Without description.</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{padding: 2, backgroundColor: '#ede6e6'}}>
      <FlatList
        data={persons}
        keyExtractor={(person) => person.name}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        windowSize={60}
        updateCellsBatchingPeriod={50}
      />
    </View>
  );
}
