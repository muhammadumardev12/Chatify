import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  InputAccessoryView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import SignUp from './SignUp';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore'
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getEmailValidationStatus, setGetEmailValidationStatus] = useState(false);
  const [visibleValue,setVisibleValue] = useState(false)
  const Hide = () => {
    setVisible(!visible);
    setShow(!show);
  };
  const handle_Email_Status = text => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmail(text);
    if (regex.test(text)) {
      setGetEmailValidationStatus(false);
    } else {
      setGetEmailValidationStatus(true);
    }
  };
  
  // const loginWithEmailAndPassword = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(res => {
  //       navigation.navigate('Home');
  //       console.log(res);
  //       Alert.alert('Successful');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       Alert.alert(err.message);
  //     });
  // };
    //-----------------------Through-Firebase-store---------------------//
    const loginUser =()=>{
      setVisibleValue(true)
      firestore().collection("users").where("email","==",email).get()
      .then(res=>  {
        setVisibleValue(false)
        if(res.docs != []){
        // console.log(JSON.stringify(res.docs[0].data()))
        goToNext(res.docs[0].data().name,res.docs[0].data().email,res.docs[0].data().userId,res.docs[0].data().avatar)
        Alert.alert("User Found")
        }else{
          Alert.alert("User Not Found")
        }
      })
      .catch(err=>{
        setVisibleValue(false)
        console.log(err)
        Alert.alert("User Not Found")
        
      })
    }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '215134417751-6kg3ohftnt6sgmljc12gq56bvp9vh6b8.apps.googleusercontent.com',
    });
  }, []);
          // ------------------------Google Account-----------------------//
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      // console.log("🚀 ~ onGoogleButtonPress ~ idToken:", idToken)
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('DashBoard');
    } catch (error) {
      console.error('Google sign-in error:', error);
      Alert.alert('Google sign-in error');
    }
  };
   //-------------------------------End-----------------------------------//

   async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  //------------------------Which-user-is-login -thats-data---------------------//
  const goToNext = async (name,email,userId,avatar)=>{
     await AsyncStorage.setItem('NAME',name)
     await AsyncStorage.setItem('EMAIL',email)
     await AsyncStorage.setItem('USERID',userId)
     await AsyncStorage.setItem('AVATAR',avatar)
      
     navigation.navigate('DashBoard')
  }
  return (
<KeyboardAwareScrollView
contentContainerStyle={{ flexGrow: 1 }}
keyboardShouldPersistTaps="handled"
>

    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#011e22'} />
      <ImageBackground
        source={require('../assets/pictures/bg.png')}
        style={{width: responsiveWidth(100), height: responsiveHeight(35)}}
        resizeMode="cover">
        <View
          style={{
            height: responsiveHeight(85),
            width: responsiveWidth(100),
            backgroundColor: 'white',
            marginTop: responsiveHeight(24),
            borderTopLeftRadius: 90,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: responsiveHeight(3),
            }}>
            <Image source={require('../assets/pictures/logo1.png')} />
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(2.5),
              }}>
              Welcome Back !
            </Text>
            <View>
              <View style={{marginVertical: responsiveHeight(3)}}>
                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    width: responsiveWidth(85),
                    height: responsiveHeight(6.5),
                    borderRadius: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    // marginVertical: responsiveHeight(3),
                  }}>
                  <Icon name="account" size={22} color="black"></Icon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    style={{
                      width: responsiveWidth(70),
                      height: responsiveHeight(6.5),
                    }}
                    value={email}
                    onChangeText={text =>
                      handle_Email_Status(text)
                    }></TextInput>
                </View>
                {getEmailValidationStatus ? (
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      paddingRight: responsiveWidth(1.5),
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: responsiveFontSize(1.5),
                        fontWeight: 'bold',
                      }}>
                      Please Enter Valid Email
                    </Text>
                  </View>
                ) : null}
              </View>

              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  width: responsiveWidth(85),
                  height: responsiveHeight(6.5),
                  borderRadius: 10,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Icon2
                  name="lock"
                  size={20}
                  color="black"
                  style={{marginLeft: responsiveWidth(2)}}></Icon2>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'black'}
                  secureTextEntry={visible}
                  style={{
                    width: responsiveWidth(70),
                    height: responsiveHeight(6.5),
                    marginLeft: responsiveWidth(1),
                  }}
                  value={password}
                  onChangeText={text => setPassword(text)}></TextInput>
                <TouchableOpacity onPress={Hide}>
                  <Icon2
                    name={show === false ? 'eye' : 'eye-slash'}
                    color={'black'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={{
                // backgroundColor: '#42C561',
                backgroundColor: 'green',
                height: responsiveHeight(6),
                width: responsiveWidth(64),
                marginVertical: responsiveHeight(5),
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              // onPress={loginWithEmailAndPassword}
              onPress={()=>{
                loginUser()
              }}
              >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(3),
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black'}}>Doesn't have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SignUp);
                }}>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  {' '}
                  Create here
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                marginVertical: responsiveHeight(1),
              }}>
              or
            </Text>
          </View>
          {/* ---------------------Google and facebook--------------------- */}

          <View
            style={{
              height: responsiveHeight(6.6),
              width: responsiveWidth(90),
              // backgroundColor:'pink',
              marginVertical: responsiveHeight(1.5),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              //  marginTop:responsiveHeight(5)
            }}>
            <View>
              <TouchableOpacity
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(14),
                  // backgroundColor:'#E5E7E9',
                  backgroundColor: '#C1E1C1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  marginHorizontal: responsiveWidth(3),
                }}
                onPress={() => {
                  onGoogleButtonPress();
                }}>
                <Image
                  source={require('../assets/pictures/Google.png')}
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(11),
                    position: 'relative',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(14),
                  backgroundColor: '#C1E1C1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  marginHorizontal: responsiveWidth(3),
                }}
                onPress={onFacebookButtonPress}
                >
                <Image
                  source={require('../assets/pictures/facebook.png')}
                  style={{
                    height: responsiveHeight(5),
                    width: responsiveWidth(11),
                    position: 'relative',
                  }}
                />
              </TouchableOpacity>
              <Loader  visibleValue={visibleValue}/>
            </View>
          </View>
          {/* --------------------------- end Google and FaceBook--------------------------------- */}
        </View>
      </ImageBackground>
    </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
