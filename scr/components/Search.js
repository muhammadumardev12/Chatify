import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BackIcon} from '../assets/pictures/Svgs';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('NAME');
        const storedAvatar = await AsyncStorage.getItem('AVATAR');
        setName(storedName);
        setAvatar(storedAvatar);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <View
        style={{
          //   backgroundColor:'pink',
          width: responsiveWidth(100),
          height: responsiveHeight(10),
        }}>
        <View
          style={{
            // marginTop: responsiveHeight(2),
            marginHorizontal: responsiveWidth(4),
            flexDirection: 'row',
            // backgroundColor:'black',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
            <BackIcon />
          </TouchableOpacity>
          <View>
          <View
            style={{
              height: responsiveHeight(9),
              width: responsiveWidth(18),
              borderRadius: 50,
              backgroundColor: 'green',
              borderColor: 'white',
              borderWidth: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: avatar}}
              style={{width: responsiveWidth(14), height: responsiveHeight(7)}}
            />
          </View>
          <Text style={{color:'white',fontWeight:'bold'}}>{name}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: responsiveHeight(85),
          width: responsiveWidth(100),
          backgroundColor: 'white',
          marginTop: responsiveHeight(5),
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: responsiveWidth(85),
            height: responsiveHeight(5),
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: responsiveHeight(3),
          }}>
          <TextInput
            placeholder="search"
            placeholderTextColor={'black'}
            style={{
              width: responsiveWidth(70),
              height: responsiveHeight(6.5),
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
