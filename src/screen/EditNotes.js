import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
function EditNotes() {
  const [Titletext, setTitleText] = React.useState(' ');
  const [Notetext, setNotetText] = React.useState(' ');
  const [txt, settxt] = React.useState(' ');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        style={{height: 90, backgroundColor: 'black'}}
        placeholder="Title"
        onChangeText={Titletext => {
          setTitleText(Titletext);
        }}
      />
      <TextInput
        style={{height: 400, backgroundColor: 'white'}}
        placeholder="Note"
        onChangeText={Notetext => {
          setNotetText(Notetext);
        }}
      />

      <View>
        <View style={styles.Background2}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/editplus.png')}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/painticon.png')}
          />
          <Text style={{fontSize: 30}}>Edited </Text>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/3dots.png')}
          />
        </View>
      </View>
    </View>
  );
}

export default EditNotes;

const styles = StyleSheet.create({
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
  Background2: {
    borderRadius: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderWidth: 1,
  },
});
