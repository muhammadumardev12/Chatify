import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SearchIcon, VerticalThreeDots} from '../assets/pictures/Svgs';
import TopNavigation from '../components/TopNavigation';

const DashBoard = () => {
  return (
    <View style={{flex: 1}}>
        <StatusBar
        // backgroundColor={'white'}
        />
      {/* //----------------------Header-Section--------------------// */}
      <View
        style={{
          height: responsiveHeight(9),
          width: responsiveWidth(100),
          backgroundColor: 'pink',
        //   justifyContent: 'center',
          alignItems:'center',
          flexDirection:'row',
          justifyContent:'space-between'
        }}>

         
        <View
          style={{
            // backgroundColor: 'red',
            height: responsiveHeight(5.3),
            width: responsiveWidth(31),
            marginLeft:responsiveWidth(2)
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(4),
              fontWeight: 'bold',
              color: 'black',
            }}>
            Chartify
          </Text>
        </View>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{marginHorizontal:responsiveWidth(3)}}>
          <SearchIcon/>
        </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:responsiveWidth(3)}}>
          <VerticalThreeDots/>
        </TouchableOpacity>

      </View>
      </View>
      {/* //--------------------Header-Section-End-----------------// */}
      {/* <TopNavigation/> */}
    
    </View>
  );
};

export default DashBoard;
