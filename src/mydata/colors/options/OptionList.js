import * as React from 'react';
import database from '@react-native-firebase/database';
import JSONDATA from '../../../FlatList/JsonData.json';
import {FlatList, StyleSheet, Text, Dimensions,View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReadDatabase from '../../ReadDatabase';
let Readvalues;
let myjsondata;

 function DisplayDataBase() {
  async function ReadData() {
    Readvalues = await ReadDatabase();
    console.log('outSide of read values == Readvalues', Readvalues);
    myjsondata = JSON.stringify(Readvalues);
    console.log('JSON', myjsondata);
  }
  ReadData();

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
          <Text>{item.key}</Text>
          <Text>{item.title}</Text>
          <Text>{item.ContentValue}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 0.9}}>
      <FlatList
        data={Readvalues}
        renderItem={renderItem1}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={2}
      />
    </View>
  );
}
export default DisplayDataBase;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 20,
    width: Dimensions.get('window').width / 2,
  },
});
