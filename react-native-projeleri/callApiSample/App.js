import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import Axios from './src/components/Axios'
import People from './src/components/People'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <People/>
        {/* <Axios/> */}
      </SafeAreaView>
    )
  }
}
 
const styles = StyleSheet.create({})
