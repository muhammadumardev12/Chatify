import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { AccountIcon, GoBack } from '../assets/pictures/Svgs'

const SettingComp = ({txt}) => {
  return (
    <View style={{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:responsiveHeight(10),
        marginTop:responsiveHeight(1),
        elevation:5
        }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <AccountIcon style={{marginHorizontal:responsiveWidth(4)}}/>
          <Text style={{color:'black',fontWeight:'bold'}}>{txt}</Text>
        </View>
         <TouchableOpacity>
          <GoBack style={{marginRight:responsiveWidth(4)}}/>
          </TouchableOpacity>
      </View>
  )
}

export default SettingComp