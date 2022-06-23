import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity,Image, TextInput } from 'react-native'
import data from '../assets/data'

export default class Flatlist extends Component {
    state={text:'',stateData:data}
    _renderItem = ({ item, index })=> {
        return(
            <TouchableOpacity style={[styles.itemContainer,
            {backgroundColor:index%2 === 1 ? '#CCC':''}]}>
            <Image style={styles.avatar} source={{uri:item.avatar}}></Image>
            <View style={styles.textContainer} >
                <Text style={styles.name} >{item.id}.{item.name}</Text>
                <Text>{item.company}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    _ListHeaderComponent=()=>{
        return(
            <View style={styles.searchContainer}>
                <TextInput 
                style={styles.searchInput} 
                placeholder='Search...' 
                value={this.state.text}
                onChangeText={text => {this.setState({text}),this._searchFilter(text)}}
                ></TextInput>
            </View>
        )
    }

    _searchFilter = (text) => {
        const newData=data.filter(item=>{
            const listItem=`${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase())>-1;
        })
        this,this.setState({stateData:newData})
    }

    render() {
        return (
            <View>
                <Text style={styles.name} > Flatlist Component Sample</Text>
                <FlatList
                ListHeaderComponent={this._ListHeaderComponent}
                renderItem={this._renderItem}
                keyExtractor={(item)=>item.id}
                data={this.state.stateData}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        borderBottomWidth:2,
        borderBottomColor:'#EEE'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25
    },
    textContainer:{
        justifyContent:'space-around',

    },
    name:{
        fontSize:18,
        fontWeight:'bold'
    },
    searchContainer:{
        padding: 10,
    },
    searchInput:{
        fontSize:15,
        backgroundColor:'#F8F8F8',
        padding: 10,
        borderWidth:2,
        borderRadius: 5,
    }
})
