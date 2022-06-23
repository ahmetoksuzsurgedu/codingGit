import React, { useState,Component } from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,useColorScheme,View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 32,
    padding: 24,
    backgroundColor:"red"
  },
  title: {
    flex:1,
    marginTop:16,
    padding: 24,
    backgroundColor:'red',
    color:'blue',
    textAlign:'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonField: {
    flexDirection:'row',
    justifyContent:'center'
  },
});

export default class App extends Component {
  state={counter:0};
  _onPressMinus = () =>{this.setState({counter:this.state.counter-1})}
  _onPressPluss = () =>{this.setState({counter:++this.state.counter})}

  render() {
      return (
        <SafeAreaView style={styles.title}>
          <ScrollView style={styles.title} >
              <Button title='-' onPress={this._onPressMinus} />
                <Text style={{textAlign:'center', fontSize:74, fontWeight:'bold'}}>{this.state.counter}</Text>
              <Button title='+' onPress={this._onPressPluss} />
          </ScrollView>
        </SafeAreaView>
      )
  }
}