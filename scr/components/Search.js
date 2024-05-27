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
import { useDispatch, useSelector } from 'react-redux';
import { storeLoginUser } from '../Redux/Actions';

const Search = () => {
  const dispatch =useDispatch()
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [searchQuery,setSearchQuery] =useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('NAME');
        const storedAvatar = await AsyncStorage.getItem('AVATAR');
        setName(storedName);
        setAvatar(storedAvatar);
        // dispatch(storeLoginUser(storedName, storedAvatar));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const UsersData = useSelector(state => {
    return state?.users
  })
  const UsersId = useSelector(state => {
    return state?.users.id
  })
  const handleSearch = (txt) =>{
     setSearchQuery(txt)
  }

   
  
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
            clearButtonMode='always'
            autoCapitalize='none'
            onChangeText = {(text)=>handleSearch(text)}
            style={{

              width: responsiveWidth(70),
              height: responsiveHeight(6.5),
            }}
          />
        </View>
      {/* //------------------Users------------------------// */}
      {UsersData.user.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase())).length > 0 ? (
      <FlatList
          data={UsersData.user.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))}
          showsVerticalScrollIndicator={false}
          style={{marginBottom:responsiveHeight(.5)}}
          
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
                onPress={() => { navigation.navigate('Chat', { data: item, id: UsersId }) }}
              >
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
      ) : (
      <Text style={{color:'black',marginTop:responsiveHeight(1)}}>Data is not found</Text>)
        }

      </View>
     
    </View>
  );
};

export default Search;

  
  
