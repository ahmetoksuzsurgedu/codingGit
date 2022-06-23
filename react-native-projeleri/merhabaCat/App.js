import Cat from './cat';
import KullanState from './src/kullanState'
import React from 'react';
import {Node, useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,
  useColorScheme,View,Image,TextInput,Button,Platform} from 'react-native';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
return (


  <View style={styles.container} > 
    <Text style={styles.text1}>NEFISEM </Text>
    <Image source={require('./src/surgift-1.png')} />
  </View>


  /*
    <View style={styles.container}>
      <View style={[styles.box,styles.box1]}>
        <Text>{name}.{count}</Text>
      <Text> Box-1  </Text>
      <Cat/>
      <Button color='blue' title='Change Name useState_li' onPress={_onPressCngNameUseStateli} ></Button>

    </View>
    <View style={[styles.box,styles.box2]}>
      <Text>        Box-2     </Text>
      <Button color='blue' title='Test Button' onPress={_onPressBtnClick}></Button>
    </View> 
    <View style={[styles.box,styles.box3]}>
      <Text>        Box-3      </Text>
      <KullanState/>
    </View>
   </View> 
   */
   /*
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
          style={{ width: 100, height: 100 }}   />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
    
*/
    
  );
}

//export default App;

/* ilk kurulan TEMPLATE
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            NEFISE Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: '700',
  },
});
*/

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    fontSize:18,
    fontWeight:'400',
    backgroundColor:'FFEBCB',
    flex:1,
    flexDirection:'column'
  },
  box:{
    borderColor:'red',
    borderRadius:5,
    height:180
  },
  box1:{
    backgroundColor:'red',
    flex:1
  },
  box2:{
    backgroundColor:'yellow',
    flex:1
  },
  box3:{
    backgroundColor:'blue',
    flex:3
  },
  text1:{
  height: Platform.OS === 'android' ? 200 : 100,
  backgroundColor:Platform.OS === 'android' ? 'blue':'red'
  }
})


export default App;
