import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyTab= createBottomTabNavigator();
const Tab  = createBottomTabNavigator();
export default function TabNavSample() {
    return (
        <MyTab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName; 
                if (route.name==='Home'){
                    iconName=focused ? 'home' : 'apps';
                } 
                else if(route.name==='Settings') {
                    iconName= focused ? 'apps' : 'settings';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }) }>
            <MyTab.Screen name='Home' component={HomeScreen} options={{tabBarBadge:3}} ></MyTab.Screen>
            <MyTab.Screen name='Settings' component={SettingsScreen} ></MyTab.Screen>
        </MyTab.Navigator>

    )
}
