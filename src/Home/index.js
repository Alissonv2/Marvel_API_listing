import React, {useState, useEffect} from 'react';
import {Text, FlatList, Image, TouchableOpacity} from 'react-native';
import md5 from 'js-md5';

import styles from './styles';
import api from '../services/api';

const publicKey = 'YOUR_API_PUBLIC_KEY';
const privateKey = 'YOUR_API_PRIVATE_KEY';

const timestamp = Date.now();
const hash = md5.create();
hash.update(timestamp + privateKey + publicKey);

export default function Home() {
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    api
      .get(
        `characters?ts=${timestamp}&orderBy=name&limit=30&apikey=${publicKey}&hash=${hash.hex()}`,
      )
      .then((response) => {
        const results = response.data.data.results;

        setPerson(results);
      });
  }, []);

  const renderItem = ({item: person}) => (
    <TouchableOpacity onPress={() => {}} style={styles.personCard}>
      <Image
        style={styles.avatar}
        source={{uri: `${person.thumbnail.path}.${person.thumbnail.extension}`}}
      />
      <Text style={styles.textName}>{person.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={persons}
        keyExtractor={(person) => person.name}
        renderItem={renderItem}
      />
    </>
  );
}
