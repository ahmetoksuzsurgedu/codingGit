import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'

export default function ProfileScreen({navigation:{setParams,setOptions},route}) {
  return (
    <>
      <Text>Profile Screen</Text>
      <Button
      title='Swap title and friends'
      onPress={()=>setParams({
        friends:route.params.name=== 11 ? "OK": 'NOT',
        ti:route.params.title === 'Nefise' ? 'Nefise Profile' : 'Other Profile',
        title:'Ahmet'
      })}/>
      <Text>{route.params.friends} {route.params.ti} </Text>
    </>
  )
}