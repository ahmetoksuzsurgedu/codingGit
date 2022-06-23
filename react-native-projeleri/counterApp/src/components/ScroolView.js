import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView, Dimensions} from 'react-native'

const boyutlar = Dimensions.get('window')
export default class ScroolView extends Component {

    render() {
        return (
            <ScrollView horizontal={false}>
            <View style={styles.myView}>
                <Text style={styles.myText}> {boyutlar.width} X {boyutlar.height} sdfdsfds </Text>
                <Text style={styles.myText}> {Dimensions.get('window').height}X{Dimensions.get('window').width} ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                <Text style={styles.myText}> ScroolView </Text>
                </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
myView:{backgroundColor:'yellow',flex:1,flexDirection:'column'},
myText:{margin:10,padding: 30, backgroundColor:'red',textAlign:'center', color:'blue'},
})
