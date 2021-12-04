import Navigation from './src/navigation/Navigation'
import * as React from 'react';
import FlatListBasics from './src/navigation/FlatListBasics';
import { Button, Text, View } from 'react-native';
import FrontPage from './src/screen/FrontPage';
import { Linking } from 'react-native';

//import React, { Component } from "react";
//import { Text } from 'react-native-elements';

 function App()
 {
   return(
     <View style={{flex:1,backgroundColor:"green"}}> 
     <View style={{flex:.1,alignItems:"center"}}> 
     <Text style={{fontSize:20,flex:.3}}>
       Wellcome
     </Text>
     </View>
     {/* <FlatListBasics/> */}
      {/* <FrontPage/> */}
     
     <Navigation/>
     
     </View>
    
   );
 };
export default App;