import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity, FlatList,TextInput, ActivityIndicator } from 'react-native'
import axios from 'axios';

export default class People extends Component {
    state={text:'',contact:[],loading:true,allContacts:[],page:1,searchingState:false,refreshing:false}

componentDidMount() {
    this._getUser();
}

    _getUser= async ()=> {
        this.setState({loading:true})
        const{data:{results:allContacts}} =await axios.get(`https://randomuser.me/api/?results=10&page=${this.state.page}`)
        const allALLContacts=[...this.state.allContacts,...allContacts]
        if (this.state.refreshing) {
            allALLContacts.reverse()
        }
        console.log(allALLContacts.length)
        this.setState({contact:allALLContacts,allContacts:allALLContacts, loading:false,refreshing:false})
    }

    _renderItem = ({ item, index })=> {
    //    console.log({item})
        return(
            <TouchableOpacity style={[styles.itemContainer,
            {backgroundColor:index%2 === 1 ? '#E6E6E6':''}]}>
            <Image style={styles.avatar} source={{uri:item.picture.thumbnail}}></Image>
            
            <View style={styles.textContainer} >
                <Text style={styles.name} >{item.name.first}.{item.name.last}</Text>
                <Text>{item.location.city}</Text>
            </View>
            </TouchableOpacity>
        );
    }

    _ListHeader=()=>{
        return(
            <View style={styles.searchContainer}>
                <TextInput 
                onFocus={()=>this.setState({searchingState:true})}
                onBlur={()=>this.setState({searchingState:false})}
                style={styles.searchInput} 
                placeholder='Search...' 
                value={this.state.text}
                onChangeText={text => {this.setState({text}),this._searchFilter(text)}}
                ></TextInput>
                <Text>{this.state.contact.length}/{this.state.allContacts.length}</Text>
            </View>
        )
    }

    _searchFilter = (text) => {
        const newData=this.state.allContacts.filter(item=>{
            const listItem=`${item.name.first.toLowerCase()} 
            ${item.name.last.toLowerCase()} 
            ${item.location.city.toLowerCase()}`;
            return listItem.indexOf(text.toLowerCase())>-1;
        })
        this.setState({contact:newData})
    }

    _renderFooter=()=>{
        if (!this.state.loading ) return null
        return(
            <View>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    _loadMore=()=>{
        if(!this.state.searchingState){
            this.setState(
                {page:this.state.page+1},
                ()=>{this._getUser()}
            )
        }
    }

    _onRefresh=()=>{
            this.setState(
                {page:1,refreshing:true},
                ()=>{this._getUser()}
            )
    }

    render() {
        return (
            <View>
                <FlatList
                ListFooterComponent={this._renderFooter}
                ListHeaderComponent={this._ListHeader}
                renderItem={this._renderItem}
                keyExtractor={(item)=>item.login.uuid}
                data={this.state.contact}
                onEndReached={this._loadMore}
                onEndReachedThreshold={0.05}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
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
