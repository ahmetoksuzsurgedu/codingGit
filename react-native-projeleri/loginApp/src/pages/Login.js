import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm'


export default class Login extends Component {
    render() {
        return (
            <View style={styles.headBackground}>
              <View>
                <Text style={styles.logo} > Login </Text>
                <Text style={styles.logoText} > Slogan </Text>
              </View>
              <ScrollView >
          <KeyboardAvoidingView behavior={'position'}> 
                <View style={styles.loginArea}>
                    <Text style={styles.loginAreaTitle}>Test APP Login</Text>
                    <Text style={styles.loginAreaDescription}>Please login to use the application...</Text>
                    <LoginForm />
                </View>
          </KeyboardAvoidingView>
                </ScrollView>
              <View style={styles.signUpArea}>
                <Text style={styles.signUpAreaDesc}>Don't have an accout?</Text>
                <TouchableOpacity>
                  <Text style={styles.signUpAreaText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
      headBackground:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        flex:1,
        backgroundColor:'#1572DE',
        borderBottomRightRadius:150,
        borderColor:'#1572DE',
      },
      logo:{
        paddingTop:60,
        textAlign:"center",
        fontSize:40,
        fontWeight:'bold',
        color:'#F2F2F2'
      },
      logoText:{
        textAlign:'center',
        color:'#F2F2F2'
      },
      loginArea:{
        margin:50,
        backgroundColor:'#FFF',
        padding: 10,
        borderRadius:5,
        elevation:4
      },
      loginAreaTitle:{
        fontSize:20,
        textAlign:'center'
      },
      loginAreaDescription:{
        fontSize:11,
        color:'#7e868f',
        textAlign:'center',
      },
      signUpArea:{alignItems:'center',marginBottom:20},
      signUpAreaDesc:{color:'#999'},
      signUpAreaText:{color:'#666'}
})
