import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Users from '../components/Users';
import Settings from './SettingChlids';
import { NavigationContainer } from '@react-navigation/native';
import Groups from './Groups';
import Status from './Status';
import Calls from './Calls';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle:{fontSize:responsiveFontSize(2),fontWeight:'bold',color:'black'},
        tabBarIndicatorStyle: { backgroundColor: 'green' },
    }}
    >
      <Tab.Screen name="Users" component={Users} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />


    </Tab.Navigator>
    // </NavigationContainer>
  );
}