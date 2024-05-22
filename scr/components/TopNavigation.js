import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Users from '../components/Users';
import Settings from '../components/Settings';

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={Users} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}