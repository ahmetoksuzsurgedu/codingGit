import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'

export default function DetailsScreen({navigation,route}) {
  const {itemId,name} = route.params;
  return (
    <SafeAreaView  style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
      <Text>Details Screen {itemId} : {name} </Text>
      <Button title="Go to Details... again"
      onPress={()=>navigation.push('Details')} ></Button>
      <Button title="Go back"
      onPress={()=>navigation.goBack()} ></Button>
      <Button title="Go to top screen in stack"
      onPress={()=>navigation.popToTop()} ></Button>
    </SafeAreaView>
  )
}
