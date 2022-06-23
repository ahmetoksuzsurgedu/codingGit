import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDrawerStatus } from '@react-navigation/drawer';

export default function NotificationScreen({navigation}) {
    const isDrawerOpen = useDrawerStatus() === 'open';
    return (
        <View>
            <Button title='Open Drawer' onPress={()=>navigation.openDrawer()}></Button>
            <Button title='Toggle Drawer' onPress={()=>navigation.toggleDrawer()}></Button>
            <Text>NotificationScreen Drawer is {isDrawerOpen === true ?'OPEN':'CLOSED' } </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
