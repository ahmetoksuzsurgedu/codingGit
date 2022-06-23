import React, {useState,useLayoutEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'

export default function HomeScreen({navigation,route}) {
  const [counter, setCounter] = useState(0)

useLayoutEffect(() => {
  navigation.setOptions(
    {headerRight:()=>(<Button title='Updata count' onPress={()=>setCounter((c)=>c+1)} ></Button>)}
  )
}, [navigation,counter])

  return (
    <SafeAreaView  style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Text>Count: {counter}</Text>
      <Button title="Go to Details"
      onPress={()=>navigation.navigate('Details',{itemId:11, name:'Nefise'})} ></Button>
      <Button title="Go to Profile"
      onPress={()=>navigation.navigate('Profile',{name:'Custom Profile Title', title:'Nefise'})} ></Button>
      <Button title="Write a new Message"
      onPress={()=>navigation.navigate('CreatePost')} ></Button>
      <Text style={{margin:15}} >{route.params?.post}</Text>
    </SafeAreaView>)
}