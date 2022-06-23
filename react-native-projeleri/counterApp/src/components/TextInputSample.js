import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class TextInputSample extends Component {
    state={username:''}
    render() {
        return (
            <View>
                <Text style={styles.userText}> {this.state.username} </Text>
                <TextInput 
                keyboardAppearance='dark'
                keyboardType='numeric'
                style={{height:50,borderColor:'gray',borderWidth:5}}
                placeholder='User name'
                value={this.state.value}   
                onChangeText={(userText)=>this.setState({username:userText})}
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userText:{
        fontSize:25,
        fontWeight:'bold',
        color:'red',
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
})
