import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {TouchableOpacity,TextInput} from 'react-native';
import JSONDATA from './JsonData.json'


function SingleViewFlatList () {
  ItemSeparator =()=> {
    return (
      <View
        style={{
          height: 1,
          width: 5,
          backgroundColor: "pink",          
        }}
      />
    );
  }


  renderItem1 = ({item}) => {
    const randomNumber = () => Math.floor(Math.random() * 255) + 1;
    const getRandomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    return (
      <TouchableOpacity onPress={() => alert('Hey!! Usr')}>
        <View style={[styles.item2, {backgroundColor: getRandomColor}]}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  

return (
  <View style={{flex: .9}}>
  <SafeAreaView style={styles.container1}>
<FlatList 
  data={JSONDATA}
  renderItem={renderItem1}
  keyExtractor={item => item.title}          
ItemSeparatorComponent={ItemSeparator} 
  contentContainerStyle={{ 
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
   }}
/>
</SafeAreaView>
</View>
);
  }

export default SingleViewFlatList;







const styles = StyleSheet.create({
  
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  item2: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    alignItems: 'center',
    flex: 1,
    width: 400,
    height: 100,
    fontSize: 20,
  },
  item: {
    width: 40,
    height: 20,
    borderWidth: 2,
  },
  flatlist: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
