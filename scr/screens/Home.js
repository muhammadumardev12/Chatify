import { View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { Rectangle, Setting } from '../assets/pictures/Svgs'
import { useNavigation } from '@react-navigation/native'
import Users from '../components/Users'
import Settings from '../components/Settings'


const Home = () => {
  const [showUser,setshowUser] = useState(0)
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      {
        showUser === 0 ? (<Users/>):(<Settings/>)
      }
      <View style={{
        position:'absolute',
        bottom:0,
        width:responsiveScreenWidth(100),
        height:responsiveHeight(8),
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        // backgroundColor:'red'
      }}>
          <TouchableOpacity style={{
            width:responsiveWidth(50),
            height:responsiveHeight(8),
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'red'
          }} 
          onPress={()=>{
            setshowUser(0)
          }}
          >
           <Rectangle />
          </TouchableOpacity>

          <TouchableOpacity style={{
            width:responsiveWidth(50),
            height:responsiveHeight(8),
            justifyContent:'center',
            alignItems:'center',
          }}
          onPress={()=>{
            setshowUser(1)
          }}
          >
           <Setting/>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home