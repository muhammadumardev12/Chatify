// SplashScreen.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Chartify, Rectangle } from '../assets/pictures/Svgs';

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
     const timer = setTimeout(()=>{
        navigation.navigate('LoginScreen')
        checkLoginIN()

     },1000)
    },[])
    //----------------Check-login-Report---------------//
   
    const checkLoginIN = async()=>{
     const id = await AsyncStorage.getItem("USERID");
     console.log("🚀 ~ checkLoginIN ~ id:", id)
     if(id !== null){
        navigation.navigate('Home')
     }else{
        navigation.navigate('LoginScreen')
     }
    }
   

    return (
        <View style={styles.container}>
         
            
            <View 
            style={styles.overlay}
            >
                <Image
                    source={require('../assets/pictures/logo.png')}
                    style={styles.logo}
                />

            
                <Text style={styles.text}>Welcome to Chartify</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        // color: '#ffffff',
        color:'green',
        marginTop: 20,
    },
});

export default SplashScreen;
