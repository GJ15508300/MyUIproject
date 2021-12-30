import database from '@react-native-firebase/database';
import {StyleSheet, View, Button, Text, BackHandler, Image} from 'react-native';
import * as React from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {FindKeyValuesDB} from './FindKeyValuesDB';
import {useNavigation} from '@react-navigation/native';
import ColorPlate from '../mydata/colors/ColorPlate';
import ReadDatabase from './ReadDatabase';
import SelectDropdown from 'react-native-select-dropdown';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import EditScreenOptionMenu from '../options/EditScreenOptionMenu';

// { route, navigation }
function EditNotesMydatabase() {
  const route = useRoute();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (route.params?.key) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log('KEy Find', route.params.key);
    }
  }, [route.params?.key]);

  // React.useEffect(() => {
  // })

  // const {  SelectedKey, SelectedValues, SelectedContent } = route.params;
  // console.log("SelectedValues, SelectedContent, SelectedKey", SelectedValues, SelectedContent, SelectedKey);
  // const { SelectedValues } = route.params;
  // const { SelectedContent } = route.params;
  // const { SelectedKey } = route.params;
  //console.log("SelectedValues, SelectedContent, SelectedKey",route.params.SelectedValues, route.params.SelectedContent, route.params.SelectedKey);
  const [values, onChangeTitleValue] = React.useState();
  const [ContentValue, onchangeContentValue] = React.useState('');
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();

  const [pressBack, setPressBack] = React.useState(false);
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);
  // if(SelectedValues||SelectedContent||SelectedKey !== undefined )
  // {

  // }
  // else{

  // }
  if (pressBack) {
    keyvalue();
  }
  async function keyvalue() {
    console.log('values', values, ContentValue);
    await FindKeyValuesDB(values, ContentValue);
  }
  function handleBackButtonClick() {
    setPressBack(true);
    navigation.goBack();
    return true;
  }

  //ReadDatabase;

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View styles={styles.contentBox}>
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> </View> */}
        {/* <Text>Details Screen</Text>
      <Text>SelectedValues: {(route.params.SelectedValues)}</Text>
      <Text>SelectedContent: {JSON.stringify(route.params.SelectedContent)}</Text>
      
      <Text>SelectedKey: {JSON.stringify(route.params?.SelectedKey)}</Text> */}
        <Text>Title</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={text => onChangeTitleValue(text)}
        value={values}
      />
      <View styles={styles.contentBox}>
        <Text>CONTENT AREA</Text>
      </View>
      <TextInput
        style={styles.contentBox}
        onChangeText={text => onchangeContentValue(text)}
        value={ContentValue}
      />

      <View style={styles.GroundBackground2}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/editScreenPlus.png')}
        />
        <ColorPlate />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <EditScreenOptionMenu />
        </View>
      </View>
    </View>
  );
}
export default EditNotesMydatabase;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },
  contentBox: {
    height: 300,
    margin: 20,
    borderWidth: 3,
    padding: 10,
  },
  textStyle: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 50,
  },
  GroundBackground2: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 70,
  },
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
  lastlog: {
    alignSelf: 'flex-end',
    margin: 15,
    width: 40,
    height: 30,
  },
  colorsStyle: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'yellow',
    margin: 2,
    borderWidth: 3,
    borderColor: 'pink',
  },
  contentContainerStyle: {
    backgroundColor: 'green',
    paddingVertical: 10,
    marginTop: 40,
  },
});

// function ColorPlate() {
//   console.log('Enter color');
//   var Colors = {
//     products: [
//       {product: 'Rice', id: 1},
//       {product: 'Sweets', id: 2},
//       {product: 'Fruits', id: 3},
//       {product: 'Animals', id: 4},
//       {product: 'humans', id: 5},
//       {product: 'sport', id: 6},
//       {product: 'kitchen', id: 7},
//       {product: 'childrens', id: 8},
//       {product: 'men', id: 9},
//       {product: 'old people', id: 10},
//       {product: 'shafty', id: 11},
//       {product: 'transport', id: 12},
//     ],
//   };

//   return (
//     <View style={{flex:1}}>
//         <Text>Hai</Text>
//       <ScrollView
//         //showsHorizontalScrollIndicator={false}
//         style={styles.contentContainerStyle}
//         horizontal={true}
//         //showsVerticalScrollIndicator={false}
//       >

//         {Colors.products.map((item, index) => (
//           <View key={item.id} style={styles.colorsStyle}>
//             <Text>{item.product}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }
