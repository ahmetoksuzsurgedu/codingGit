import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class imageComp extends Component {
    state={counter:0}
    render() {
        return (
            <View>
                <Text> imageComponent {this.state.counter}</Text>
                <TouchableOpacity onPress={()=>{this.setState({counter:this.state.counter+1})}} > 
                <Image source={require('../assets/20210812_165146_450x800.jpg')} 
                style={{width:100, height:100, alignSelf: 'center', }}></Image>
                </TouchableOpacity>
                <TouchableHighlight onPress={()=>{this.setState({counter:this.state.counter-1})}}>
                <Image source={require('../assets/20210812_165146_450x800.jpg')} 
                style={{width:100, height:100, alignSelf: 'center', }}></Image>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
