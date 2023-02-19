import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CONSTANT from '../Constants.config';

export default function Header({onPressMenu, onPressNotification}) {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{height: 50, width: 50}}
          source={require('../assets/Logo.png')}
        />
        {/* <Image
          style={{marginLeft: 30}}
          source={require('../assets/plantifySmall.png')}
        /> */}
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
          Safe Life
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 80,
          }}>
          <TouchableOpacity
            onPress={onPressNotification ?? null}
            style={{marginHorizontal: 10}}>
            <Icon
              name={'notifications-none'}
              size={26}
              color={CONSTANT.MAIN_TEXT_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressMenu ?? null}
            style={{marginHorizontal: 10}}>
            <Icon name={'menu'} size={28} color={CONSTANT.MAIN_TEXT_COLOR} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
