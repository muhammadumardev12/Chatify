import {View, Text, TouchableOpacity, StatusBar,Modal,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SearchIcon, VerticalThreeDots} from '../assets/pictures/Svgs';
import TopNavigation from '../components/TopNavigation';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../Redux/Actions';




const DashBoard = () => {
    // const dispatch = useDispatch();
    //-------------------Handle-Modal-------------------//
    const [modalVisible,setModalVisible] = useState(0)
    const pressingThreeDots = ()=>{
        setModalVisible(1)
    }
    const clearOut = ()=>{
        setModalVisible(0)
    }
    //----------------End------------------------------//
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleLogout = async () => {
      dispatch(logout());
      await AsyncStorage.removeItem('USERID');
      navigation.navigate('LoginScreen');
    };

  
  return (
    <View style={{flex: 1}}>
      <StatusBar
      backgroundColor={'green'}
      />
      {/* //----------------------Header-Section--------------------// */}
      <View
        style={{
          height: responsiveHeight(9),
          width: responsiveWidth(100),
          backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          //   backgroundColor:'orange'
        }}>
        <View
          style={{
            height: responsiveHeight(5.3),
            width: responsiveWidth(31),
            marginLeft: responsiveWidth(2),
            // backgroundColor:'red'
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              fontWeight: 'bold',
              color: 'green',
            }}>
            Chartify
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            height: responsiveHeight(8),
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginHorizontal: responsiveWidth(3),
            }}
            onPress={()=>navigation.navigate('Search')}
            >
            <SearchIcon />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: responsiveWidth(3)}}
          onPress={pressingThreeDots}
          >
            <VerticalThreeDots />
          </TouchableOpacity>
        </View>
      </View>
      {/* //--------------------Header-Section-End-----------------// */}
      <TopNavigation />
      {/* //-----------------------Modal------------------------------// */}

      { modalVisible?(
      <Modal
      transparent={true}
      style={{backgroundColor:'red'}}
      >
        <TouchableWithoutFeedback
        onPress={clearOut}
        >
        <View  style={{
            flex:1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{
            height:responsiveHeight(13),
            width:responsiveWidth(38.5),
            backgroundColor:'white',
            marginLeft:responsiveWidth(55),
            marginTop:responsiveHeight(8),
            justifyContent:'center',
            borderRadius:10
            }}>
            <TouchableOpacity style={{
             marginLeft:responsiveWidth(3),
            //  marginVertical:responsiveHeight(1),
            }}>
                <Text
                style={{fontSize:responsiveFontSize(2.5),color:'black',fontWeight:'bold'}}
                >Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
             marginLeft:responsiveWidth(3),
             marginTop:responsiveHeight(2)
            }}
            onPress={handleLogout}
            >
                <Text
                style={{fontSize:responsiveFontSize(2.5),color:'black',fontWeight:'bold'}}
                >Logout</Text>
            </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>):(null)}
    </View>
  );
};
export default DashBoard;

