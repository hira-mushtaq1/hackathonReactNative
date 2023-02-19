import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import styles from '../styling';

import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../globalStyles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CONSTANT from '../Constants.config';

function LiveLocation({navigation, route}) {
  const [currLatitude, setlatitude] = useState();
  const [currLongitude, setlongitude] = useState();
  let category = () => {
    route = route.params;
  };

  let getLocation = () => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setlatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <View>
        {currLatitude && currLongitude ? (
          <View style={styles1.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles1.map}
              region={{
                latitude: currLatitude,
                longitude: currLongitude,

                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                title="ABC Title"
                description="ABC"
                coordinate={{
                  latitude: currLatitude,
                  longitude: currLongitude,

                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></Marker>
            </MapView>
          </View>
        ) : null}
        {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Police')}
            style={{
              paddingHorizontal: 100,
              paddingVertical: 18,
              borderRadius: 40,
              marginTop: 400,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                backgroundColor: CONSTANT.THEME_COLOR,
                fontSize: 18,
                fontWeight: 'bold',
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 25,

                marginStart: 30,
              }}>
              Fight
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Police')}
            style={{
              paddingHorizontal: 100,
              paddingVertical: 18,
              borderRadius: 40,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                backgroundColor: CONSTANT.THEME_COLOR,
                fontSize: 18,
                fontWeight: 'bold',
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 25,

                marginStart: 40,
              }}>
              Robbery
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      {category == 'Police' ? (
        <>
          <TouchableOpacity
            onPress={SendrequestFight}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text style={styles.button}>Fight</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestRobbery}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Robbery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestHarassment}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Harassment</Text>
          </TouchableOpacity>
        </>
      ) : null}

      {category == 'Ambulance' ? (
        <>
          <TouchableOpacity
            onPress={SendrequestMedicalEmergancy}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
              color: 'white',
            }}>
            <Text>Medical Emergancy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestFire}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Fire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestAccident}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Accident</Text>
          </TouchableOpacity>
        </>
      ) : null}

      {category == 'Fire Brigade' ? (
        <>
          <TouchableOpacity
            onPress={SendrequestFire}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Fire</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestCylinderBlast}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Cylinder Blast</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={SendrequestShortCircuit}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#c1121f',
              borderRadius: 15,
              padding: 10,
            }}>
            <Text>Short Circuit</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </>
  );
}
export default LiveLocation;

const styles1 = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    marginTop: 10,
    //   justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
