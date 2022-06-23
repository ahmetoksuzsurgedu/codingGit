import React from 'react'
import { StyleSheet, TextInput, View,SafeAreaView,Button } from 'react-native'

export default function CreatePostScreen({navigation,route}) {
  const [postText, setPostText] = React.useState('')
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
      <TextInput multiline
      placeholder='Write a message...'
      style={{height:300,width:'100%',padding:15,backgroundColor:'white'}}
      value={postText}
      onChangeText={setPostText}
      ></TextInput>
      <Button
      title='Send Message'
      onPress={()=>{navigation.navigate({name:'Home',params:{post:postText}})}}
      ></Button>
    </View>
  )
}