import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CONSTANT from '../Constants.config';

export default function SplashScreen({navigation}) {
  return (
    <View style={{backgroundColor: CONSTANT.THEME_TEXT, height: 840}}>
      <View
        style={{
          height: 520,
          backgroundColor: CONSTANT.THEME_COLOR,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <ImageBackground
          style={{height: 550, alignItems: 'center', justifyContent: 'center'}}
          source={require('../assets/Emergency.png')}>
          {/* <Image
            style={{marginTop: 10, height: 100, width: 255, marginBottom: 40}}
            source={require('../assets/Emergency.png')}
          /> */}
          {/* <Image
            style={{height: 32, width: 250, marginTop: 25}}
            source={require('../assets/Emergency.png')}
          /> */}
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            marginHorizontal: 20,
            marginVertical: 50,
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Stay Safe
        </Text>
        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            marginHorizontal: 20,
            marginVertical: 10,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          This notification will contain all necessary information about you and
          your contacts in case of an emergency. Very easy to setup, just be
          sure to enable notifications on lock screen on your device.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 100,
              paddingVertical: 18,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
