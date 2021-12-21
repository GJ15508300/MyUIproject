import database from '@react-native-firebase/database';
import {StyleSheet, View, Button, Text} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import ReadDatabase from './ReadDatabase';
let mydata = [];
let readfiledata = [];
function Mydatabase() {
  const [values, onChangeNumber] = React.useState();
  const [viewValue, onchangeViewValue] = React.useState('');
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();

  function wrightfile(writedata) {
    console.log(writedata);
    database()
      .ref('/user')
      .set({
        writedata,
      })
      .then(() => console.log('Data set. wright'))
      .catch(err => console.error('error: ' + err));
  }

  function readfile() {
    database()
      .ref('/user')
      .once('value')
      .then(snapshot => {
        console.log('User data read once: ', snapshot);
        if (snapshot === null) {
        } else {
          let array = [];

          array.push(snapshot.val());
          console.log('ARRAY', array);
          // array.push(values);
          mydata = array;
          console.log('mydata', mydata);
          // mydata.push(values);
          RemoveData();
          //UpdateOnlyMyData(mydata)
          wrightfile(mydata);
        }

        console.log('MYDATA', mydata);
      })
      .catch(err => console.error('error: ' + err));
  }

  console.log("box 2 text value 'mydata' ", mydata);

  function UpdateOnlyMyData() {
    database()
      .ref('/user')
      .update({
        name: values,
      })
      .then(result => {
        console.log('Data updated.', result);
      });
  }

  function PushupdateMydata() {
    console.log('Auto generated key: ', newReference.key);
    
    newReference
      .set({
        name: values,
      })
      .then(result => {
        console.log('Data updated.', result);
      });
  }
  function Realtimechanges() {
    database()
      .ref('/user')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
      });
  }

  function RemoveData() {
    database().ref('/user').set(null);
    console.log('REMOVE');
    //database().ref('/users/123').remove();
  }

  return (
    <View>
      <Text> my call{mydata}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeNumber(text)}
        value={values}
      />

      <Button title="Push UPDATE" onPress={PushupdateMydata} />
      <Button title="read from server" onPress={readfile} />
      <Button title="Remove" onPress={RemoveData} />
      <Button title="Real time changes" onPress={Realtimechanges} />
      <Button title="Update Only" onPress={UpdateOnlyMyData} />
      <TextInput
        style={styles.input}
        onChangeText={text => onchangeViewValue(text)}
        value={viewValue}
      />
    </View>
  );
}
export default Mydatabase;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },
});
