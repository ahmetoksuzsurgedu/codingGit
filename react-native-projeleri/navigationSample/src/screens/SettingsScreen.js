import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen({navigation}) {
    return (
        <View>
            <Text></Text>
            <Button title='Go Home'
            onPress={()=>navigation.navigate('Home') } ></Button>
        </View>
    )
}