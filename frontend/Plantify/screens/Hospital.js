import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  RefreshControl,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CardComponent from '../components/CardComponent';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import {add} from '../store/cartSlice';
import {addFavourite} from '../store/favouriteProdSlice';
import {showToast} from '../methods/methods';
import Toast from 'react-native-toast-message';

export default function Hospital({navigation}) {
  const [plants, setPlants] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const getPlants = () => {
    axios
      .get(`${CONSTANT2.PROJECT_URL}/api/plants`)
      .then(res => {
        setErrorMessage(null);
        setPlants(res.data.plants);
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getPlants();
  }, []);

  let handleRefresh = () => {
    setRefresh(true);
    getPlants();
    setTimeout(() => {
      setRefresh(false);
      showToast('REFRESHED SUCCESSFULLY', 'success');
    }, 1500);
  };

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Live Location')}
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Google Map')}
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
      {/* </View> */}
    </ScrollView>
  );
}
