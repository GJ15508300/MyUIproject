import database from '@react-native-firebase/database';
import {StyleSheet, View, Button} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
let mydata=[];
function ReadDatabase()
{
    const reference = database().ref('/user');
    database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
      console.log('User data read once: ', snapshot.val());
      mydata=
      mydata.push(snapshot.val())
      console.log("mydata",mydata);
    }) 
    .catch(err => console.error("error: " + err));
    console.log("mydata 001",mydata);
      return ( mydata ); 
}
export default ReadDatabase;