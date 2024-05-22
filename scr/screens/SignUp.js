import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Feather';

// import {useNavigation} from '@react-navigation/native';
import {avatars} from '../../utils/Supports';
import uuid from 'react-native-uuid'
import firestore from '@react-native-firebase/firestore'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({navigation}) => {
  // const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const [name,setName] =useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('') 
  
  const Hide = () => {
    setVisible(!visible);
    setShow(!show);
  };

  const handleAvatar = item => {
    setAvatarMenu(false);
    setAvatar(item?.image.asset.url)
    setAvatarMenu(false);
  };

  // const signUpFn =()=>{
  //  auth().createUserWithEmailAndPassword(email,password).then(()=>{
  //   Alert.alert("User Created")   
  //   navigation.navigate('Home')

  //  })
  //  .catch(err=>{
  //   console.log("error",err)
  //   Alert.alert(err.message)
  //  })
  // }

     //------------------------User-Sign-Up-through-Firebase-Store-------------------------//
     const registerUser =()=>{
      const userId = uuid.v4()
       firestore().collection('users').doc(userId).set({
        name:name,
        email:email,
        password:password,
        userId:userId
       }).then(res=>{
        
        console.log("User Sccessfully Created")
        navigation.navigate('LoginScreen');
       })
       .catch(err=>{
        console.log("error is ",err)
       })
     }
  return (
    <>
    <StatusBar backgroundColor={'#011e22'} />
      <View style={{flex: 1}}>
      
        {/* -----------------------Avatar---------------------------- */}
        {avatarMenu ? (
          <View>
            <ImageBackground source={require('../assets/pictures/blur.jpg')}>
              <ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                  {avatars?.map(item => (
                    <TouchableOpacity
                      style={{
                        height: responsiveHeight(10),
                        width: responsiveWidth(20),
                        borderRadius: 50,
                        backgroundColor: 'white',
                        borderColor: 'green',
                        borderWidth: 3,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: responsiveWidth(3),
                        marginVertical: responsiveHeight(2.5),
                      }}
                      onPress={() => handleAvatar(item)}>
                      <Image
                        source={{uri: item.image.asset.url}}
                        style={{
                          height: responsiveHeight(8),
                          width: responsiveWidth(18),
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        ) : (
          //  {/* ------------------------Avatar-End----------------------- */}
          
          <ImageBackground
            source={require('../assets/pictures/bg.png')}
            style={{width: responsiveWidth(100), height: responsiveHeight(35)}}
            resizeMode="cover">
            <View
              style={{
                height: responsiveHeight(90),
                width: responsiveWidth(100),
                backgroundColor: 'white',
                marginTop: responsiveHeight(20),
                borderTopLeftRadius: 90,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: responsiveHeight(2),
                }}>
                <Image source={require('../assets/pictures/logo1.png')} />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2.5),
                    marginTop: responsiveHeight(1.5),
                  }}>
                  Join With Us !
                </Text>
                <View style={{marginTop: responsiveHeight(1)}}>
                  <TouchableOpacity
                    style={{
                      height: responsiveHeight(10),
                      width: responsiveWidth(20),
                      borderRadius: 50,
                      borderColor: 'green',
                      borderWidth: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={()=>setAvatarMenu(true)}>
                    <ImageBackground
                      source={{uri: avatar}}
                      resizeMode="contain"
                      style={{
                        height: responsiveHeight(10),
                        width: responsiveWidth(18),
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
                <KeyboardAwareScrollView>
                <View>
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
                      marginTop: responsiveHeight(2),
                    }}>
                    <Icon
                      name="account"
                      size={22}
                      color="black"
                      style={{marginLeft: responsiveWidth(2)}}></Icon>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor={'black'}
                      style={{
                        width: responsiveWidth(70),
                        height: responsiveHeight(6.5),
                      }}
                      value={name}
                      onChangeText={(text)=>setName(text)}
                      ></TextInput>
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
                      marginVertical: responsiveHeight(3),
                    }}>
                    <Icon
                      name="email"
                      size={22}
                      color="black"
                      style={{marginLeft: responsiveWidth(2)}}></Icon>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={'black'}
                      style={{
                        width: responsiveWidth(70),
                        height: responsiveHeight(6.5),
                      }}
                      value={email}
                      onChangeText={(text)=>setEmail(text)}
                      ></TextInput>
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
                      onChangeText={(text)=>setPassword(text)}
                      ></TextInput>
                     
                    <TouchableOpacity onPress={Hide}>
                      <Icon2
                        name={show === false ? 'eye' : 'eye-slash'}
                        color={'black'}
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>

                </View>
                </KeyboardAwareScrollView>

                  




                <TouchableOpacity
                  style={{
                    // backgroundColor: '#42C561',
                    backgroundColor: 'green',
                    height: responsiveHeight(6),
                    width: responsiveWidth(64),
                    marginVertical: responsiveHeight(2),
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  // onPress={signUpFn}
                  onPress={()=>{
                    registerUser()
                  }}
                  >
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: responsiveFontSize(3),
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black'}}>Have an account !</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('LoginScreen');
                    }}>
                    <Text style={{color: 'green', fontWeight: 'bold'}}>
                      {' '}
                      Login here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        )}
      </View>
    </>
  );
};

export default SignUp;


