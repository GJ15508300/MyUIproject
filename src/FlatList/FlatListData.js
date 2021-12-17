import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JSONDATA from './JsonData.json'
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


const Item = ({ title }) => (
  <View style={[styles.item, { backgroundColor: "white" }]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

  export default class FlatListData extends React.Component {
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
  
  renderItem = ({ item }) => (
    <View>      
    <Item title={item.title} />
    </View>
  );

  renderItem1 = ({ item }) => {
    const randomNumber = () => Math.floor(Math.random() * 255) + 1;
    const getRandomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    return (
      <TouchableOpacity onPress={() => alert("pressed!")}>
        
  <View style={[styles.item2, { backgroundColor: getRandomColor }]}> 
        <Text >
        <Item title={item.title} />
        </Text>
        <View style={{ width: "100%", height: 1, backgroundColor: "gray" }} />
        </View>
      </TouchableOpacity>
    );
  };

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


   ListHeader = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>
            This is Header
        </Text>
      </View>
    );
  };

   ListFooter = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>
            This is Footer
        </Text>
      </View>
    );
  };

render(){ 
  return (
    <View style={{flex:1}}> 
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.title}
        // contentContainerStyle={{
        //   flexDirection:'row',
        //   flexWrap:'wrap-reverse'
        // }}        
        ListHeaderComponent={this.ListHeader}        
        ListFooterComponent={this.ListFooter}
        
      />
    </SafeAreaView>
    
    
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
