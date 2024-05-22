import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { avatars } from '../../utils/Supports'


const Testing = () => {

   return (
   
    <View style={{flex:1 }}>
        <ImageBackground source={require('../assets/pictures/blur.jpg')}>
      <ScrollView>
      
       <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
     
      {
        avatars?.map((item)=>(
           <TouchableOpacity
           style={{
            height: responsiveHeight(10),
            width: responsiveWidth(20),
            borderRadius: 50,
            backgroundColor:'white',
            borderColor: 'green',
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal:responsiveWidth(3),
            marginVertical:responsiveHeight(2.5)
          }}
           >
            <Image source={{uri:item.image.asset.url}}
            style={{
              height: responsiveHeight(8),
              width: responsiveWidth(18),
            }}
            />
            </TouchableOpacity>
            
        ))
      }
          
   </View>

   
 
   </ScrollView>
   </ImageBackground>
    </View>

    )}


export default Testing

