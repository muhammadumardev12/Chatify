import {View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BackIcon} from '../assets/pictures/Svgs';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

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
  const UsersData = useSelector(state => {
    return state?.users
  })
  // console.log("🚀 ~ data ~ data:", UsersData.user[0].name)

   
  
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>

        {/* //------------------Header-Profile----------------// */}
      <View
        style={{
            // backgroundColor:'pink',
          width: responsiveWidth(100),
          height: responsiveHeight(10),
          justifyContent:'center',
        }}>
        <View
          style={{
            marginHorizontal: responsiveWidth(4),
            flexDirection: 'row',
            // backgroundColor:'black',
            alignItems: 'center',
            marginTop:responsiveHeight(4)
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
            <BackIcon />
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          <View
            style={{
              height: responsiveHeight(9),
              width: responsiveWidth(18),
              borderRadius: 50,
              backgroundColor: 'green',
              borderColor: '#D4AF37',
              borderWidth: 3,
              alignItems: 'center',
              justifyContent: 'center',
            //   marginHorizontal:responsiveWidth(7)
            marginLeft:responsiveWidth(6)
            }}>
            <Image
              source={{uri: avatar}}
              style={{width: responsiveWidth(16.3), height: responsiveHeight(8.2)}}
            />
          </View>
          <Text style={{color:'white',fontWeight:'bold',marginTop:responsiveHeight(2.9),marginLeft:responsiveWidth(7.5),fontSize:responsiveFontSize(2.5)}}>{name}</Text>
          </View>
        </View>
      </View>

      {/* //------------------Header-End-----------------// */}
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
            borderColor: 'green',
            borderWidth: 2,
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
      {/* //------------------Users------------------------// */}
      <FlatList
          data={UsersData.user}
        
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  height: responsiveHeight(9),
                  width: responsiveWidth(93),
                  backgroundColor: 'white',
                  marginTop: responsiveHeight(2),
                  alignContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation: 5,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  borderColor: '#B2BEB5',
                  borderWidth: 2,
                  overflow: 'hidden', // Ensure shadow is not clipped,
                  flexDirection: 'row',
                }}
                onPress={() => { navigation.navigate('Chat', { data: item, id: item.id }) }}
              >
                  {
                console.log("🚀 ~ Users ~ id:", item.id)
                    
                }
                <Image
                  source={{
                    uri: item.avatar
                  }}
                  style={{ width: 48, height: 48, borderColor: 'green', borderWidth: 2, borderRadius: 100, marginHorizontal: responsiveWidth(2) }}
                />
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'black' }}>{item?.name}</Text>
             
              </TouchableOpacity>
            )
          }}
        />

      </View>
     
    </View>
  );
};

export default Search;

  
  
