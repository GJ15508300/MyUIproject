import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JSONDATA from './JsonData.json'
export default class JsonFlatList extends React.Component {  

    ItemSeparator =()=> {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "red",
            }}
          />
        );
      }
    

    render(){ 
        return (
        <View style={{flex:1}}> 

<SafeAreaView style={styles.container}> 
    <FlatList
        data={JSONDATA}
        ItemSeparatorComponent = {this.ItemSeparator}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {item.title}
              
            </Text>
          </View>
        )}
        keyExtractor={item => item.title}
      />
      </SafeAreaView>

</View>
  );
}
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 10,
    },
    item: {
      padding:20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems:'center',
      fontStyle:'italic',
      fontSize:30,
      fontWeight:"bold",
      backgroundColor:"gray"
    },
    item2: {
      padding:20,
      marginVertical: 1,
      marginHorizontal: 1,
      alignItems:'center',
      flex:1,
      width:20,
      height:20,
      fontWeight:'bold'
      
    },
    title: {
      fontSize: 20,
    },
    text:
  {
    flex:1,
    fontSize:20,
    backgroundColor:"green",
    padding:10,
   
  },
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  });
  