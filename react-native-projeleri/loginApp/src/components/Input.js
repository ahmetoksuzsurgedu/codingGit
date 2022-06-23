import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput } from 'react-native'

export default class Input extends Component {
    state={text:''}
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                {...this.props} 
                value={this.state.text}
                onChangeText={text=>this.setState({text})}
                style={styles.input}
                ref={this.props.inputRef}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
      },
      input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#F2F2F2',
        color:'#999',
        marginBottom:8,
        fontSize:14,
        fontWeight:'600'
    }
})
