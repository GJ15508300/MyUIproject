import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eight Item',
    },
    {
      id: '9',
      title: 'The renderItem prop is a function that takes every item object from the data prop and renders them into the list component. If you want your data to display with special styling, you can do this within the renderItem or refer to the method through the renderItem prop that creates styling for you (an example: renderItem={this.RenderStyling})',
    },
    {
      id: '10',
      title: 'There are two required props for React Native FlatList component data and renderItem. ',
    },
  ];
  
  export default class AddNumberList extends React.Component {  
    state = {
        data: [],
      };

    addItem = () => {
        this.setState(prevState => {
          const length = prevState.data.length;
          let item = { title: length + 1, key: length + 1 };
          return {
            data: [...prevState.data, item],
          };
        });
      };

      renderItem1 = ({ item }) => {
        const randomNumber = () => Math.floor(Math.random() * 255) + 1;
        const getRandomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        return (
          <TouchableOpacity onPress={() => alert("Hey!! Usr")}>
            
      <View style={[styles.item2, { backgroundColor: getRandomColor }]}> 
            <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      };
      render(){ 
        return (
        <View style={{flex:1}}> 
        <Button onPress={this.addItem} title='Add Number LIst'/>
        <SafeAreaView style={styles.container}>
        <FlatList
        data={this.state.data}
        renderItem={this.renderItem1}
        keyExtractor={item => item.title}
        contentContainerStyle={{
          flexDirection:'row',
          flexWrap:'wrap-reverse'
        }}
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
      justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    item2: {
      padding:1,
      marginVertical: 5,
      marginHorizontal: 6,
      alignItems:'center',
      flex:1,
      width:50,
      height:50,
      fontSize:20,
      
    },
    item: {
        width: 40,
        height: 20,
        borderWidth:2
      },
      flatlist:{
        flex:1
      },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
   
  });
  