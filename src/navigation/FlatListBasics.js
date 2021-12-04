import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button,FlatList,StyleSheet } from 'react-native';
//import { Text } from 'react-native-elements';
  const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '-----'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
  
  export default FlatListBasics;

  
  const styles = StyleSheet.create({
    container: {
     flex: 1,
    //  paddingTop: 22,
     backgroundColor:"red",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
