import * as React from 'react';
import { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import MenuImage from '../assets/icons/Menu.png';
import HamburgerImage from '../assets/icons/HamburgerMenu.png';
import ProfileImage from '../assets/icons/profile.png';
import PlusImage from '../assets/icons/Plus.png';
import Navigation from '../navigation/Navigation';

const Menu_IMAGE = Image.resolveAssetSource(MenuImage).uri;
const Hamburger_IMAGE = Image.resolveAssetSource(HamburgerImage).uri;
const Profile_IMAGE = Image.resolveAssetSource(ProfileImage).uri;
const Plus_IMAGE = Image.resolveAssetSource(PlusImage).uri;

function FrontPage()
{
    const [text,setText] = useState(" ");
    return(
        <View style={{flex:1,backgroundColor:"blue"}}> 
         
        <View style={styles.Background} >               
        <Image
        style={styles.tinyLogo}
        source={{uri: Menu_IMAGE}}
      />     
            <TextInput
                    style={{height: 40}} 
                    placeholder="Search your Notes"   
                    onChangeText={text=>{setText(text)}}
                    //value={text}                
            />
            <Image
        style={styles.tinyLogo}
        source={{uri: Hamburger_IMAGE}}
      />
      <Image
        style={styles.tinyLogo}
        source={{uri: Profile_IMAGE}}
        
      />

</View>

<View> 
 
<Image
        style={styles.endLogo}
        source={{uri: Plus_IMAGE}}      
       
      />
     </View>
        </View>

    );
};
export default FrontPage;


const styles = StyleSheet.create({
    container: {
     flex: 1,     
     justifyContent:"space-evenly",
     flexDirection:"row",    
      
    },
    Background:{
        borderRadius:30,     
        justifyContent:"space-evenly",
        flexDirection:"row",
        backgroundColor: '#D4D3D3' ,
        flexDirection:"row",           
    },
    tinyLogo: {
        margin:15,
         width: 40,
         height:30,
       },
    end:{
        flexDirection:"row",
        justifyContent:"flex-end",
        margin:400
    },
      endLogo: {
        margin:15,
         width: 50,
         height:60,
       },
  });