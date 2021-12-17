import * as React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button} from 'react-native';
import MenuImage from '../assets/icons/Menu.png';
import HamburgerImage from '../assets/icons/HamburgerMenu.png';
import ProfileImage from '../assets/icons/profile.png';
import PlusImage from '../assets/icons/Plus.png';
import { useNavigation } from '@react-navigation/native';

function DashBoard() {  
  const navigation=useNavigation()
  
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.Background1}>
        <Image style={styles.tinyLogo} source={require('../assets/icons/Menu.png')} />
        <TextInput
          style={{height: 40}}
          placeholder="Search your Notes"
          onChangeText={text => {
            setText(text);
          }}
          //value={text}
        />
        <Image style={styles.tinyLogo} source={require('../assets/icons/HamburgerMenu.png')} />
        <Image style={styles.tinyLogo} source={require('../assets/icons/profile.png')} />
      </View>



      <Button
onPress={()=> { console.log("Entery"); navigation.navigate('FlatListData')} } 
title="FlatList"
  color="black"
  accessibilityLabel="Learn more about this purple button" />

<Button
onPress={()=> { console.log("Entery"); navigation.navigate('AddNumberList')} } 
title="AddNumberList"
  color="black"
  accessibilityLabel="Learn more about this purple button" />
  
<Button
onPress={()=> { console.log("Entery"); navigation.navigate('JsonFlatList')} } 
title="Json file data flatlist"
  color="black"
  accessibilityLabel="Learn more about this purple button" />

          <View style={{height:350}}></View>

              



      <TouchableOpacity 
          onPress={() =>{ console.log("Entery"); navigation.navigate('SecondScreen')}} >
          <Image
          style={styles.endLogo}
          source={require('../assets/icons/Plus.png')}
          />
      </TouchableOpacity>

          <View style={{justifyContent:'flex-end'}}>
      <View style={styles.Background2}>
        <Image style={styles.tinyLogo} source={require('../assets/icons/tick.png')} />
        <Image style={styles.tinyLogo} source={require('../assets/icons/brush.png')} />
        <Image style={styles.tinyLogo} source={require('../assets/icons/mike.png')} />
        <Image style={styles.tinyLogo} source={require('../assets/icons/image.png')} />
        
      </View>
      </View>

     

        {/* <BottomSheet/> */}
    </View>
  );
}
export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  Background1: {
    borderRadius: 30,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderWidth:1,
   margin:10,
    
  },
  Background2: {
    borderRadius: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderWidth:1,
    

  },
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 400,
  },
  endLogo: {
     marginLeft: 300,
    width:70,
    height: 70,
    borderRadius:30,
    
  },
});
