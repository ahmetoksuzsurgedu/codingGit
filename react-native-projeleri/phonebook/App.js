import React, { Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme,
  View, FlatList, Image, TouchableOpacity,TextInput, ActivityIndicator} from 'react-native';

import {Colors, DebugInstructions, Header, LearnMoreLinks,
  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { assertExpressionStatement } from '@babel/types';
import axios from 'axios';

/*  const contacts = [
    {
      _id:"1",
      picture:"https://randomuser.me/api/portraits/thumb/women/99.jpg",
      name:"Nefise",
      company:"Surgedu"
    },
    {
      _id:"2",
      picture:"https://randomuser.me/api/portraits/thumb/women/98.jpg",
      name:"Hanife Sude",
      company:"SurgeduG"
    },
    {
      _id:"3",
      picture:"https://randomuser.me/api/portraits/thumb/women/97.jpg",
      name:"Fatima Vera",
      company:"SurgeduG"
    },
    {
      _id:"4",
      picture:"https://randomuser.me/api/portraits/thumb/men/9.jpg",
      name:"Ali Halid",
      company:"SurgeduB"
    },  
  ];*/ 
  
  export default class App extends Component {
  state = {text:'', contacts:[], loading:true };

  searchFilter = (contacts,text) => {
    return contacts.filter((item) => {
    `${item.name} ${item.company}`.toLowerCase().indexOf(text.toLowerCase()) !== -1});
   // this.setState({contacts:filteredData })
  };

renderHeader = () => {
const {contacts,text} = this.state;
  return (
    <View style={styles.searchContainer}>
      <TextInput 
      onChangeText={text => {
        this.setState({text})
        this.searchFilter(contacts,text)}}
      value={text}
      placeholder="Search..." 
      style={styles.searchInput} />
    </View>
  )
    }

renderItem = ({item,index})=>{
    return(
      <TouchableOpacity style={styles.itemContainer}>
      <Image source={{uri:item.picture.thumbnail}} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name.first}{item.name.last}</Text> 
        <Text style={{fontSize:13}}>{item.location.state} </Text>
      </View>
      </TouchableOpacity>
    );
  };

componentDidMount() {
this._getRandomUser();
}


_getRandomUser=()=>{
  axios
  .get('https://randomuser.me/api/?results=30')
  .then(users => users.data.results)
  .then(users => {
    
    this.setState({
                contacts:users,
                loading:false
                })}
              )
}

_renderFooter=()=>{
  if (!this.state.loading) return null;
  return(
    <View> <ActivityIndicator size="large"/> </View>
  )
}

render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListFooterComponent={this._renderFooter}
        ListHeaderComponent={this.renderHeader}
        data={this.state.contacts}
        renderItem={this.renderItem}
        keyExtractor={item=>item.email}/>
    </SafeAreaView>
  );
  }
} // App icin
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  itemContainer:{
    flex:1,
    flexDirection:"row",
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  avatar:{
    width: 50,
    height: 50,
    borderRadius:25,
    marginHorizontal:10
  },
  textContainer:{
    justifyContent:"space-around",
  },
  name:{
    fontSize:16
  },
  searchContainer:{
    padding: 10,
  },
  searchInput:{
    fontSize:16,
    padding: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700'
  }
})
