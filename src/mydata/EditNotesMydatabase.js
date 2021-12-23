import database from '@react-native-firebase/database';
import {StyleSheet, View, Button, Text} from 'react-native';
import * as React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import ReadDatabase from './ReadDatabase';
import {WriteDataBase} from './WriteDataBase';
import {RemoveDataBase} from './RemoveDataBase';
import {UpdataDataBase} from './UpdataDataBase';
import {AddNewDataBase} from './AddNewDataBase';
import {FindKeyValuesDB} from './FindKeyValuesDB';
import { fonts } from 'react-native-elements/dist/config';
let mydata = [];
let readfiledata = [];
let myreaddata = [];
function EditNotesMydatabase() {
  const [values, onChangeTitleValue] = React.useState();
  const [ContentValue, onchangeContentValue] = React.useState('');
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();

  function Write() {
    // let mykey=ReadDatabase;
    // myreaddata=JSON.stringify(values)
    //console.log("MY READ DATA",myreaddata);
    WriteDataBase(values, 1);
  }
  function update() {
    // let myobj={name:values,key:1}
    // myreaddata=JSON.stringify(myobj)
    // console.log("MY READ DATA",myreaddata);
    myreaddata = values;
    UpdataDataBase(myreaddata);
  }
  function push() {
    AddNewDataBase(values);
  }
  function keyvalue() {
    FindKeyValuesDB(values,ContentValue);
  }

  return (
    <View>
      <View styles={styles.contentBox}> 
      <Text>Title</Text></View>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeTitleValue(text)}
        value={values}
      />
<View styles={styles.contentBox}> 
      <Text>CONTENT AREA</Text></View>
      <TextInput
        style={styles.contentBox}
        onChangeText={text => onchangeContentValue(text)}
        value={ContentValue}
      />

      <Button style={{with:'10',height:100}} title="read database data" onPress={ReadDatabase} />
      <Button title="Remove" onPress={RemoveDataBase} />
      <Button title="Add new data to DB" onPress={keyvalue} />
      {/* <Button title="Write Only" onPress={Write} /> */}
      {/* <Button title="Update Only" onPress={update} /> */}      
      {/* <Button title="key values" onPress={keyvalue} /> */}
    </View>
  );
}
export default EditNotesMydatabase;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },
  contentBox: {
    height: 300,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },
  textStyle:{
    flex:1,
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    fontSize:50,
    
  },
});
