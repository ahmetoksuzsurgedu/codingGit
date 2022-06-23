import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import axios from 'axios';

export default class Axios extends Component {
    state={name:'',surname:'',loading:true}

    componentDidMount() {
        this._getRandomUser();
    }
    
_getRandomUser= async ()=> {
    this.setState({loading:true})
  /* 
    axios
    .get('https://randomuser.me/api/')
    .then(users=>users.data.results[0])
    .then(user=> this.setState({name:user.name.first,surname:user.name.last,loading:false}))
*/
    const {data:{results}}= await axios.get('https://randomuser.me/api/')
    const {name:{first,last}} = results[0];
    this.setState({
        name:first,
        surname:last,
        loading:false
    })

}

    render() {

        const {name,surname,loading} = this.state;
        return (
            <View>
                <Text> textInAxiosComponent </Text>
                {loading ? <Text>Loading...</Text>:
                <Text> {name}{surname} </Text>}
                <Button title='Get Random User' onPress={this._getRandomUser}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
