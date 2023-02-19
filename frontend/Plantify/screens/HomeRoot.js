import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {useWindowDimensions, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import CONSTANT from '../Constants.config';

import Robbery from './Robbery';
import Fire from './Fire';
import Police from './Police';
import Harrased from './Harrased';
import Hospital from './Hospital';
import LiveLocation from './LiveLocation';

const renderTabBar = props => (
  <TabBar
    {...props}
    gap={10}
    style={{
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      elevation: 0,
    }}
    tabStyle={{width: 80}}
    indicatorStyle={{
      backgroundColor: CONSTANT.THEME_COLOR,
      height: 4,
      marginHorizontal: 20,
    }}
    scrollEnabled
    renderLabel={({route, focused}) => (
      <Text
        style={{
          color: focused ? CONSTANT.THEME_COLOR : 'black',
          fontSize: 17,
          fontWeight: focused ? 'bold' : '600',
        }}>
        {route.title}
      </Text>
    )}
  />
);
export default function Home({navigation}) {
  const layout = useWindowDimensions();

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Hospital navigation={navigation} />;
      case 'second':
        return <Harrased navigation={navigation} />;
      case 'third':
        return <Police navigation={navigation} />;
      case 'fourth':
        return <Fire navigation={navigation} />;
      case 'fifth':
        return <Robbery navigation={navigation} />;
      case 'sixth':
        return <LiveLocation navigation={navigation} />;
      default:
        return null;
    }
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Hospital'},
    {key: 'second', title: 'Harrased'},
    {key: 'third', title: 'Police'},
    {key: 'fouth', title: 'Fire'},
    {key: 'fifth', title: 'Robbery'},
    {key: 'sixed', title: 'Live Location'},
  ]);

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
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

        <View
          style={{
            position: 'absolute',
            top: 60,
            left: 40,
            width: 160,
          }}></View>

        {/* <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              position: 'relative',
              paddingLeft: 55,
              borderWidth: 1,
              borderColor: CONSTANT.MAIN_TEXT_COLOR,
              borderRadius: 20,
              width: 280,
              fontSize: 18,
              color: CONSTANT.MAIN_TEXT_COLOR,
            }}
            placeholder="Search"
            placeholderTextColor={CONSTANT.MAIN_TEXT_COLOR}
          />
          <Image
            style={{position: 'absolute', top: 18, left: 20}}
            source={require('../assets/SearchIcon.png')}
          />
          <View
            style={{
              position: 'relative',
              height: 55,
              width: 50,
              borderWidth: 1,
              borderColor: CONSTANT.MAIN_TEXT_COLOR,
              marginLeft: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 18,
            }}>
            <TouchableOpacity style={{position: 'absolute', padding: 15}}>
              <Image source={require('../assets/settingIcon.png')} />
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
      />
    </>
  );
}
