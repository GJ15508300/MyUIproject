import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPage from '../screen/FrontPage';
import { Linking } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"pink" }}>
      {/* <Text>Home Screen</Text> */}
      <FrontPage/>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}        
      />
      <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL('./FlatListBasics.js')}>
        Google
        </Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"yellow" }}>
      <Text>Details Screen
      
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} >
          
          </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
