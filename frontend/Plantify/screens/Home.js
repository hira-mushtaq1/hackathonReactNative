import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import CONSTANT from '../Constants.config';
import styles from '../globalStyles/styles';

function Home({navigation}) {
  let moveToPolice = route => {
    navigation.navigate(route, 'Police');
  };

  let moveToAmbulance = route => {
    navigation.navigate(route, 'Ambulance');
  };

  let moveToFirebrigade = route => {
    navigation.navigate(route, 'Fire Brigade');
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'lightgray',
          paddingHorizontal: 20,
        }}>
        <Image
          style={{
            height: 250,
            width: 345,
            borderRadius: 20,
            marginVertical: 10,
            position: 'relative',
          }}
          source={require('../assets/homeBackground.png')}
        />

        <TouchableOpacity
          style={{
            margin: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 15,
            padding: 20,
          }}
          onPress={() => moveToPolice('LiveLocation')}>
          <Text style={styles.button}>Police</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 15,
            padding: 20,
          }}
          onPress={() => moveToAmbulance('LiveLocation')}>
          <Text>Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            borderRadius: 15,
            padding: 20,
          }}
          onPress={() => moveToFirebrigade('LiveLocation')}>
          <Text style={styles.button}>Firebrigade</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
