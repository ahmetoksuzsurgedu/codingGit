import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen'

const MyDrawer=createDrawerNavigator();
export default function DrawerNavSample() {
    return (
        <MyDrawer.Navigator>
            <MyDrawer.Screen name='Home' component={HomeScreen}></MyDrawer.Screen>
            <MyDrawer.Screen name='Notification' component={NotificationScreen} ></MyDrawer.Screen>
        </MyDrawer.Navigator>
    )
}
