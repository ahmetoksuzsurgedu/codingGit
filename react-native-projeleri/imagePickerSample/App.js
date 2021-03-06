import React from 'react'
import ImagePickerSample from './src/pages/ImagePickerSample'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
//import FadeInView from './src/pages/FadeInView'
//import RotateView from './src/pages/RotateView'

export default function App() {
  return (
    <SafeAreaView>
    {/* <View style={styles.container}>
    <FadeInView style={styles.fadeContainer}>  
        <Text style={styles.fadeContainerText}>FADING IN</Text>      
      </FadeInView>
    </View>
    <RotateView/> */}
    <ImagePickerSample/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',marginTop:140},
  fadeContainer:{width:250,height:60,backgroundColor:'#bc477b'},
  fadeContainerText:{fontSize:30,textAlign:'center',margin:10,color:'white'}
})
