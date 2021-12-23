import database from '@react-native-firebase/database';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import JSONDATA from '../FlatList/JsonData.json';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import ReadDatabase from './ReadDatabase';
let Readvalues;

async function DisplayMyDB() {
    const [values, onChangeTitleValue] = React.useState();
    //  database()
    //   .ref('/user')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('User data read once: ', snapshot.val());
    //     if (snapshot.val() === null) {
    //       console.log('EMpty', snapshot.val());
    //     } else {
    //       Readvalues = Object.values(snapshot.val());
    //       console.log('READ VALUES', Readvalues);  
    //       function MyvaluesDB(){
    //       onChangeTitleValue(Readvalues); 
    //       }   
    //     }      })
    //   .catch(err => console.error('error: ' + err));

//  Readvalues = await ReadDatabase();
//   console.log('outSide of read values == Readvalues', Readvalues);
  
//   console.log('outSide of read values == values',values );
  
  ItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: 5,
          backgroundColor: 'pink',
        }}
      />
    );
  };
  renderItem1 = ({item}) => {
    const randomNumber = () => Math.floor(Math.random() * 255) + 1;
    const getRandomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    return (
      <TouchableOpacity onPress={() => alert('Hey!! Usr')}>
        <View
          style={[styles.RenderitemStyle, {backgroundColor: getRandomColor}]}>
          <Text>{item.ContentValue}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 0.9}}>
        <Text></Text>
      {/* <FlatList
        data={values}
        renderItem={renderItem1}
        //keyExtractor={item => item.title}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={2}
      /> */}
    </View>
  );

}
export default DisplayMyDB;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 20,
    width: Dimensions.get('window').width / 2,
  },
});
