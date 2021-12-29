import database from '@react-native-firebase/database';
import {
  StyleSheet,
  View,
  Button,
  Text,
  BackHandler,
  Image,
} from 'react-native';
import * as React from 'react';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {FindKeyValuesDB} from './FindKeyValuesDB';
import {
  useNavigation,
} from '@react-navigation/native';
import ColorData from '../mydata/colors/ColorPlate';
import OptionData from '../mydata/colors/options/OptionList'

function EditNotesMydatabase() {
  const [values, onChangeTitleValue] = React.useState();
  const [ContentValue, onchangeContentValue] = React.useState('');
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();
  const navigation = useNavigation();
  const [pressBack, setPressBack] = React.useState(false)
  
  if(pressBack){
    keyvalue();
  }
    async function keyvalue() {
    console.log("values",values,ContentValue);
   await FindKeyValuesDB(values, ContentValue);
  }
  function handleBackButtonClick() {
   setPressBack(true);
    navigation.goBack();
    return true;
  }



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
        <Text>Title</Text>
      </View>
      <OptionData/>
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
        <TouchableOpacity onPress={ () => {
              console.log('Entery color');ColorData}}>
                {/* navigation.navigate("ColorPlate") */}
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/editScreenColor.png')}
        />
        </TouchableOpacity  >
        
          
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={OptionData }>
          <Image
            style={styles.lastlog}
            source={require('../assets/icons/editScreen3dot.png')}
          />
           </TouchableOpacity>
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







function ColorPlate() {
  console.log('Enter color');
  var Colors = {
    products: [
      {product: 'Rice', id: 1},
      {product: 'Sweets', id: 2},
      {product: 'Fruits', id: 3},
      {product: 'Animals', id: 4},
      {product: 'humans', id: 5},
      {product: 'sport', id: 6},
      {product: 'kitchen', id: 7},
      {product: 'childrens', id: 8},
      {product: 'men', id: 9},
      {product: 'old people', id: 10},
      {product: 'shafty', id: 11},
      {product: 'transport', id: 12},
    ],
  };

  return (
    <View style={{flex:1}}>
        <Text>Hai</Text>
      <ScrollView
        //showsHorizontalScrollIndicator={false}
        style={styles.contentContainerStyle}
        horizontal={true}
        //showsVerticalScrollIndicator={false}
      >

        {Colors.products.map((item, index) => (
          <View key={item.id} style={styles.colorsStyle}>
            <Text>{item.product}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}