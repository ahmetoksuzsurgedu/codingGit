import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, Button, TextInput,Image } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import ProfileScreen from '../screens/ProfileScreen'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator();

function HeaderLogo() {
  return (
<Image style={{width:50,height:50}}
source={require('../20210812_165146_450x800.jpg')}
></Image>
  )
}

export default function MainStackNavigator() {
    return (
    <Stack.Navigator initialRouteName='Home' 
      screenOptions={{headerStyle:{backgroundColor:'green'},headerTintColor:'red',
      /* headerRight:()=>(<Button title='Info' color='red' onPress={()=>{alert('Heeeeyy')}}  />) */}} >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerTitle:(props)=><HeaderLogo {...props} />}} ></Stack.Screen>
        <Stack.Screen name='Details' component={DetailsScreen} initialParams={{bookName:'First Book'}} ></Stack.Screen>
        <Stack.Screen name='Profile' component={ProfileScreen} options={({route})=>({title:route.params.name})} ></Stack.Screen>
        <Stack.Screen name='CreatePost' component={CreatePostScreen} options={{title:'New Message'}} ></Stack.Screen>
    </Stack.Navigator>
    )
}


