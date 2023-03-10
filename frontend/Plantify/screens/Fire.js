import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CardComponent from '../components/CardComponent';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import {add} from '../store/cartSlice';
import {addFavourite} from '../store/favouriteProdSlice';
import {showToast} from '../methods/methods';
import Toast from 'react-native-toast-message';

export default function Fire({navigation}) {
  const [seeds, setSeeds] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getSeeds = () => {
    axios
      .get(`${CONSTANT2.PROJECT_URL}/api/seeds`)
      .then(res => {
        setErrorMessage(null);
        setSeeds(res.data.seeds);
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getSeeds();
  }, []);

  let handleRefresh = () => {
    setRefresh(true);
    getSeeds();
    setTimeout(() => {
      setRefresh(false);
      showToast('REFRESHED SUCCESSFULLY', 'success');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[CONSTANT.THEME_COLOR]}
          onRefresh={handleRefresh}
          refreshing={refresh}
        />
      }
      style={{backgroundColor: '#fff', marginBottom: 50}}>
      <View style={{zIndex: 999}}>
        <Toast topOffset={true} position="top" autoHide visibilityTime={800} />
      </View>
      {seeds && seeds.length > 0 ? (
        <View style={{marginHorizontal: 30, marginTop: 10}}>
          <Text
            style={{
              fontSize: 44,
              color: CONSTANT.THEME_COLOR,
              fontWeight: '900',
            }}>
            Seeds
          </Text>
        </View>
      ) : null}
      {seeds && seeds.length > 0 ? (
        seeds.map((seed, i) => (
          <CardComponent
            key={i}
            title={seed.name}
            category={seed.category}
            price={seed.price}
            imageUrl={seed.image}
            onPress={() => navigation.navigate('Seed Detail Screen', seed)}
            onPressFavourite={() => {
              dispatch(addFavourite(seed));
              ToastAndroid.show('ADDED TO FAVOURITES', ToastAndroid.SHORT);
            }}
            cartAction={() => {
              dispatch(add(seed));
              ToastAndroid.show('ADDED TO CART', ToastAndroid.SHORT);
            }}
          />
        ))
      ) : errorMessage ? (
        <View style={{width: 400}}>
          <Text style={{color: 'red', textAlign: 'center', fontWeight: '700'}}>
            {errorMessage}
          </Text>
        </View>
      ) : (
        <ActivityIndicator size={30} color={CONSTANT.THEME_COLOR} />
      )}
    </ScrollView>
  );
}
