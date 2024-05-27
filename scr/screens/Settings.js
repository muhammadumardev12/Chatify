import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { AccountIcon, BackIcon2, BarCodeIcon, GoBack, GoChat } from '../assets/pictures/Svgs'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon3 from 'react-native-vector-icons/Feather';
import SettingComp from '../components/SettingComp'

const Settings = () => {
  const navigation =useNavigation()
  // const nameOfCurrUser = useSelector(state => {
  //   return state?.UserReducer.name
  // })
  // console.log("🚀 ~ nameOfCurrUser ~ nameOfCurrUser:", nameOfCurrUser)
//  ----------------------------------------Changed it soon -------------------------------
 const [name,setName] = useState('')
 const [avatar,setAvatar] = useState('')

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
 //---------------------------------------------END----------------------------------------
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
       {/* //---------------------------Header-Style----------------------// */}
       <View style={{
        backgroundColor:'white',
        height:responsiveHeight(10),
        width:responsiveScreenWidth(100),
        flexDirection:'row',
        alignItems:'center',
        elevation:5
       }}>
        
        <TouchableOpacity style={{marginHorizontal:responsiveWidth(3)}} 
        onPress={()=>navigation.navigate('DashBoard')}
        >
        <BackIcon2 />
        </TouchableOpacity>
        <Text style={{fontSize:responsiveFontSize(3),marginHorizontal:responsiveWidth(3),fontWeight:'bold',color:'black'}}>Settings</Text>
       </View>
       {/* //------------------------------Header-End-----------------------// */}
       <View style={{
        // backgroundColor:'grey',
        flexDirection:'row',
        alignItems:'center',
        marginTop:responsiveHeight(3)
       }}>

            <View style={{marginHorizontal:responsiveWidth(5)}}>
                  <TouchableOpacity
                    style={{
                      height: responsiveHeight(12),
                      width: responsiveWidth(23),
                      borderRadius: 50,
                      borderColor: 'green',
                      borderWidth: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                     >
                    <ImageBackground
                      source={{uri: avatar}}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(12),
                        width: responsiveWidth(21.5),
                      }}>
                      <View
                        style={{
                          alignSelf: 'flex-end',
                          height: responsiveHeight(3),
                          width: responsiveWidth(6),
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'green',
                          borderRadius: 40,
                        }}>
                        <Icon3 name="edit-2" size={15} color={'white'}></Icon3>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
          
        <View style={{
          // backgroundColor:'red'
        }}>
          <Text style={{color:'black',fontSize:responsiveFontSize(2.8),marginVertical:responsiveHeight(0.6)}}>{name}</Text>
          <Text style={{color:'black'}}>0302 8008257</Text>
          <Text style={{color:'black',marginVertical:responsiveHeight(0.6),fontWeight:'bold'}}>Available</Text>
        </View>

        <TouchableOpacity style={{marginLeft:responsiveWidth(25)}}>
          <BarCodeIcon />
        </TouchableOpacity>
       </View>

      {/* -----------------------------------End -------------------------------- */}
     <SettingComp icon={<GoChat/>} txt={'Accounts'} />
     <SettingComp txt={'Chats'} />
     <SettingComp txt={'Notifications'} />
     <SettingComp txt={'Security'} />
     <SettingComp txt={'Help'} />
     <SettingComp txt={'Logout'} />
     
    </View>
  )
}

export default Settings