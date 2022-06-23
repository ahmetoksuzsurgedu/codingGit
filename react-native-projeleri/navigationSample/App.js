import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Button, TextInput,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import TabNavSample from './src/components/TabNavSample';
import DrawerNavSample from './src/components/DrawerNavSample';


export default function App() {
  return (
    <NavigationContainer>
{/* Diger tablari test etmek icin burayi yorum haline getirdik  
      <MainStackNavigator/> 
    <TabNavSample/>*/}
    <DrawerNavSample/>
    </NavigationContainer> 
  )
}
