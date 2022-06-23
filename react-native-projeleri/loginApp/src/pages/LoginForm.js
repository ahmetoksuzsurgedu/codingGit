import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Input from '../components/Input'
import LAButton from '../components/LAButton'

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.signInText}> Sign In </Text>
                <Input
                returnKeyLabel={"Next"} 
                autoCapitalize="none" 
                placeholder="Username"
                onSubmitEditing={()=>this.passwordInput.focus()}
                />
                <Input
                returnKeyLabel={"Go"}
                placeholder="Password"
                secureTextEntry={true} 
                inputRef={input=>this.passwordInput=input}
                />
                <LAButton
                color={'#f1f1f1'}
                backgroundColor={'#0065e0'}
                text={'Sign In Now'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
      signInText:{
          marginVertical:10,
          fontSize:14,
          color:'#333'
      },
})
