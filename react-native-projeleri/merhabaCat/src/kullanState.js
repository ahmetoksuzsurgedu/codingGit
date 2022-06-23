import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class kullanState extends Component {
    state={name:'Nefise',
    children:['Sude','Vera','Ali']  
    }  

   render() {
const _onPressChangeName = () => {this.setState({name:'Ahmet'})}

        return (
            <View>
                {this.state.children.map((cocuk,index)=>(
                <Text> {index+1} . {cocuk} . {this.state.name} </Text>))}
      <Button color='red' title='Change Name' onPress={_onPressChangeName} ></Button>
            
            </View>
        )
    }
}
