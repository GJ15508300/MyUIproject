import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DashBoard from '../screen/DashBoard';
import EditNotes from '../screen/EditNotes';
import FlatListData from '../FlatList/FlatListData';
import AddNumberList from '../FlatList/AddNumberList';
import JsonFlatList from '../FlatList/JsonFlatList';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={DashBoard} />
        <Stack.Screen name="SecondScreen" component={EditNotes} />
        <Stack.Screen name="FlatListData" component={FlatListData}/>
        <Stack.Screen name="AddNumberList" component={AddNumberList}/> 
        <Stack.Screen name="JsonFlatList" component={JsonFlatList}/> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
