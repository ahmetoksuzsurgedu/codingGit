import React from 'react'
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function RotateViev() {
    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder,
            {
                toValue:1,
                duration:3000,
                easing:Easing.linear,
                useNativeDriver:false
            }).start(() =>startImageRotateFunction())
    }

    const rotateData= rotateValueHolder.interpolate({
        inputRange[0,1],
        outputRange:['0deg','360deg']
    })

    return (
        <View style={{alignItems:'center'}} >
            <Text>Rotate Image Animation</Text>
            {/* <Image style={{width:200,height:200,transform:[{rotate:'160deg'}]}} source={require('../assets/smile.png')} ></Image> */}
            <Animated.Image style={{width:200,height:200,transform:[{rotate:'160deg'}]}} source={require('../assets/smile.png')}
            
            ></Animated.Image>
            <TouchableOpacity onPress={startImageRotateFunction} >
                <Text>Start Rotate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
