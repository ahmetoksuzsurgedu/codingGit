import React, { Component } from 'react'
import { Text, View ,SafeAreaView, ScrollView} from 'react-native'
import ImageComp from './src/components/imageComp'
import CounterApp from './counterApp'
import TextInputSample from './src/components/TextInputSample'
import ScroolView from './src/components/ScroolView'
import DimensionsSample from './src/components/dimensionsSample'
import Flatlist from './src/components/Flatlist'
import PlatformSample from './src/components/PlatformSample'
export default class App extends Component {
    render() {
        return (
           <SafeAreaView>
               <PlatformSample/>
               {/* <Flatlist/> */}
                {/* <DimensionsSample/> */}
                {/* <ScroolView/> */}
                {/* <TextInputSample/> */}
                {/* <ImageComp/> */}
                {/* <CounterApp/> */}
                
            </SafeAreaView>
        )
    }
}
