import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DashBoard from '../screen/DashBoard';
import EditNotes from '../screen/EditNotes';
import FlatListData from '../FlatList/FlatListData';
import AddNumberList from '../FlatList/AddNumberList';
import JsonFlatList from '../FlatList/JsonFlatList';

import EditNotesMydatabase from '../mydata/EditNotesMydatabase';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={DashBoard} />
        <Stack.Screen name="SecondScreen" component={EditNotes} />
        <Stack.Screen name="Mydatabase" component={EditNotesMydatabase} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
