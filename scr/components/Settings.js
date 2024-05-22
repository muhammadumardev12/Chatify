import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/Actions';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    await AsyncStorage.removeItem('USERID');
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          height: responsiveHeight(5),
          width: responsiveWidth(20),
          backgroundColor: 'green',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          handleLogout();
        }}>
          
        <Text style={{fontWeight: 'bold', color: 'white'}}>LogOut</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: responsiveHeight(5),
          width: responsiveWidth(25),
          backgroundColor: 'red',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:responsiveHeight(3)
        }}
        onPress={() => {
          navigation.navigate('DashBoard')
        }}>
          
        <Text style={{fontWeight: 'bold', color: 'white'}}>DashBoard</Text>
      </TouchableOpacity>
      </View>
    
  );
};

export default Settings;
