import database from '@react-native-firebase/database';
import {
  StyleSheet,
  View,
  Text,
  BackHandler,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as React from 'react';
import {TextInput} from 'react-native';
import {FindKeyValuesDB} from './FindKeyValuesDB';
import {useNavigation} from '@react-navigation/native';
import ColorPlate from '../mydata/colors/ColorPlate';
import {useRoute} from '@react-navigation/native';
import EditScreenOptionMenu from '../options/EditScreenOptionMenu';
import {AddEditDB} from './AddEditedDB';

function EditNotesMydatabase() {
  const route = useRoute();
  const {
    KeyId,
    Title,
    Content,
    BackgroundColorHexValue,
    index,
    PinValue,
    ArchiveValue,
  } = route?.params ?? {};
  console.log('parameter passing ArchiveValue', ArchiveValue, KeyId);
  const navigation = useNavigation();
  const [colorBackground, setColorBackground] = React.useState('#FFFFFF');
  React.useEffect(() => {});

  const [values, onChangeTitleValue] = React.useState(Title);
  const [ContentValue, onchangeContentValue] = React.useState(Content);
  const reference = database().ref('/user');
  const newReference = database().ref('/user').push();
  var colorCheck = 0;
  const [pressBack, setPressBack] = React.useState(false);
  const [MYArchiveValue, SetArchiveValue] = React.useState(false);
  const [MYPinValue, SetPinValue] = React.useState(false);
  const [UnPin, SetUnPin] = React.useState(PinValue);
  const [UnArchiveValue, SetUnArchiveValue] = React.useState(ArchiveValue);
  console.log('ArchiveValue ,UnArchiveValue', MYArchiveValue, UnArchiveValue);
  if (pressBack) {
    // console.log(
    //   'ArchiveValue 1st',
    //   MYArchiveValue,
    //   'ArchiveValue',
    //   ArchiveValue,
    // );
    KeyId === undefined
      ? FindKeyValuesDB(
          values,
          ContentValue,
          colorBackground,
          MYArchiveValue,
          MYPinValue,
        )
      : console.log('MYPinValue ,UnPin', MYPinValue, UnPin);
    AddEditDB(
      values,
      ContentValue,
      KeyId,
      colorBackground === '#FFFFFF' ? BackgroundColorHexValue : colorBackground,
      index,
      MYPinValue !== false ? MYPinValue : UnPin,
      MYArchiveValue !== false ? MYArchiveValue : UnArchiveValue,
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
  let isLoggedIn;
  if (PinValue === false) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  let isArchiveLogIn;
  if (ArchiveValue === undefined) {
    isArchiveLogIn = true;
    console.log(' isArchiveLogIn if', isArchiveLogIn);
  } else {
    console.log(' isArchiveLogIn else', isArchiveLogIn);
    isArchiveLogIn = false;
  }
  return (
    <View>
      <View style={styles.ViewStyleTopIcon}>
        <View style={{alignSelf: 'flex-start', flexDirection: 'row'}}>
          <View>
            {isLoggedIn ? (
              <TouchableOpacity
                onPress={() => {
                  SetPinValue(MYPinValue + 1);
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/pinImg.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  console.log('unpin', UnPin);
                  SetUnPin(UnPin => (UnPin = false));
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/unPin.png')}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
          <View>
            {isLoggedIn ? (
              <TouchableOpacity
                onPress={() => {
                  console.log('Archive', MYArchiveValue);
                  SetArchiveValue(
                    MYArchiveValue + Math.floor(Math.random() * 1000),
                  );
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/archiveImage.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  console.log('UnArchive', UnArchiveValue);
                  SetUnArchiveValue(UnArchiveValue => (UnArchiveValue = false));
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/unArchive.png')}
                />
              </TouchableOpacity>
            )}

            {/* {isLoggedIn ? (
              <TouchableOpacity
                onPress={() => {
                  console.log('UnArchive', UnArchiveValue);
                  SetUnArchiveValue(UnArchiveValue => (UnArchiveValue = false));
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/unArchive.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  console.log('Archive', MYArchiveValue);
                  SetArchiveValue(
                    MYArchiveValue + Math.floor(Math.random() * 1000),
                  );
                }}>
                <Image
                  style={styles.ClickablePin}
                  source={require('../assets/icons/archiveImage.png')}
                />
              </TouchableOpacity>
            )} */}
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor:
            colorCheck !== 1 ? colorBackground : BackgroundColorHexValue,
        }}>
        <View style={{}}>
          <Text>Title</Text>
          <TextInput
            //borderColor="red"
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
            numberOfLines={13}
            style={styles.contentBox}
            onChangeText={text => onchangeContentValue(text)}
            value={ContentValue}
          />
        </View>

        <View style={styles.ViewGroundBackground2}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/editScreenPlus.png')}
          />
          <ColorPlate setColorBackground={setColorBackground} />

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            {EditScreenOptionMenu(index)}
          </View>
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
    borderWidth: 0.3,
    padding: 10,
  },
  contentBox: {
    //height: 250,
    margin: 20,
    borderWidth: 0.2,
    padding: 10,
  },
  textStyle: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 50,
  },
  ViewGroundBackground2: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 70,
  },
  ViewStyleTopIcon: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    //marginTop: 70,
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
  ClickableIcon: {
    margin: 1,
    width: 40,
    height: 50,
    alignSelf: 'flex-end',
  },
  ClickablePin: {
    margin: 1,
    width: 40,
    height: 50,
    alignSelf: 'flex-start',
  },
});
