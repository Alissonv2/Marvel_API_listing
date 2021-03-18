import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  personCard: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
  },

  containerText: {
    display: 'flex',
    flex: 1,
    marginLeft: 20,
  },

  textName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },

  textDescription: {
    fontSize: 16,
    color: '#ff6969',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },

  avatar: {
    width: 100,
    height: 90,
  },
});

export default styles;
