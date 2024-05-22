
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './scr/screens/Home'
import LoginScreen from './scr/screens/LoginScreen'
import SignUp from './scr/screens/SignUp'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import messaging from '@react-native-firebase/messaging';
import SplashScreen from './scr/screens/SplashScreen'
import Users from './scr/components/Users'
import Settings from './scr/components/Settings'
import Chat from './scr/screens/Chat'
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace'
import DashBoard from './scr/screens/DashBoard'


const App = () => {
  const stack = createNativeStackNavigator()

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }
  const getToken= async()=>{
    const token = await messaging().getToken()
    // console.log("Token====",token)
  }

  useEffect(()=>{
    requestUserPermission()
    getToken()
  },[])
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <stack.Navigator  >
        <stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}} />
        <stack.Screen name='LoginScreen' component={LoginScreen}   options={{headerShown:false}} />
        <stack.Screen name='SignUp' component={SignUp}   options={{headerShown:false}} />
        <stack.Screen name='Home' component={Home}  options={{headerShown:false}} />
        <stack.Screen name='Users' component={Users} options={{headerShown:false}}  />
        <stack.Screen name='Settings' component={Settings} options={{headerShown:false}} />
        <stack.Screen name='Chat' component={Chat}   options={{headerShown:true,headerStyle:{backgroundColor:'green'},headerTintColor:'white'}}   />
        <stack.Screen name='DashBoard' component={DashBoard}   options={{headerShown:false}}   />

      </stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App


