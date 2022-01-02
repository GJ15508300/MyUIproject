import database from '@react-native-firebase/database';
import {StyleSheet, View, Button, Text, BackHandler, Image} from 'react-native';
import * as React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {FindKeyValuesDB} from './FindKeyValuesDB';
import {useNavigation} from '@react-navigation/native';
import ColorPlate from '../mydata/colors/ColorPlate';
import {useRoute} from '@react-navigation/native';
import EditScreenOptionMenu from '../options/EditScreenOptionMenu';
import {AddEditDB} from './AddEditedDB';
import {RemoveParticularData} from './RemoveParticularData';

function EditNotesMydatabase() {
  const route = useRoute();
  var checkDelt = 0;
  const {KeyId, Title, Content, BackgroundColorHexValue, index} =
    route?.params ?? {};
  console.log(
    'parameter passing',
    KeyId,
    Title,
    Content,
    BackgroundColorHexValue,
    index,
  );
  const navigation = useNavigation();
  const [colorBackground, setColorBackground] = React.useState('#FFFFFF');
  const [DeletData, setDeleteData] = React.useState('index');

  React.useEffect(() => {});

  const [values, onChangeTitleValue] = React.useState(Title);
  const [ContentValue, onchangeContentValue] = React.useState(Content);
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();
  var colorCheck = 0;
  const [pressBack, setPressBack] = React.useState(false);

  if (pressBack) {
    KeyId === undefined
      ? FindKeyValuesDB(values, ContentValue, colorBackground)
      : AddEditDB(
          values,
          ContentValue,
          KeyId,
          colorBackground == '#FFFFFF'
            ? BackgroundColorHexValue
            : colorBackground,
          index,
        );
  }

  function handleBackButtonClick() {
    setPressBack(true);
    navigation.navigate('Home', {flag: Math.random()});
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

  if (KeyId !== undefined) {
    colorCheck = 1;
  } else {
    colorCheck = 0;
  }

  return (
    <View
      style={{
        backgroundColor:
          colorCheck !== 1 ? colorBackground : BackgroundColorHexValue,
      }}>
      <View>
        <Text>Title</Text>
        <TextInput
        //borderColor="green"
          style={styles.input}
          onChangeText={
            colorCheck !== 1
              ? text => onChangeTitleValue(text)
              : Title => onChangeTitleValue(Title)
          }
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
      </View>

      <View style={styles.GroundBackground2}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/editScreenPlus.png')}
        />
        <ColorPlate setColorBackground={setColorBackground} />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          {/* <EditScreenOptionMenu setDeleteData={setDeleteData}/>  */}
          {(console.log(index), checkDelt = EditScreenOptionMenu(index))}
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
