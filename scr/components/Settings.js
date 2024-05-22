import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/Actions';

import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
      </View>
    
  );
};

export default Settings;
