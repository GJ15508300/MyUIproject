import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AddNumberList from '../FlatList/AddNumberList';
import SingleViewFlatList from '../FlatList/SingleViewFlatList';
import Mydatabase from '../mydata/Mydatabase';

function DashBoard() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [mydata, setData] = useState('');
  const [clickcheck, setcheck] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.Background1}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/Menu.png')}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Search your Notes"
          onChangeText={text => {
            setText(text);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            console.log('Entery');
            setcheck(clickcheck + 1);
          }}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/HamburgerMenu.png')}
          />
        </TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/icons/profile.png')}
        />
      </View>
      <TouchableOpacity
      onPress={() => {
        console.log('Entery');
        navigation.navigate('Mydatabase');
      }}
      > 
      <Image
              style={styles.Background1}
              source={require('../assets/icons/Plus.png')}
            />
      
      </TouchableOpacity>


      {clickcheck % 2 === 1 ? <AddNumberList /> : <SingleViewFlatList />}

      <View>
        <View style={styles.Background2}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/tick.png')}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/brush.png')}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/mike.png')}
          />
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/image.png')}
          />
          {/* <View style={styles.Background3}/>
        <View style={styles.Background4}/> */}
        </View>

        <View style={styles.nxtscreen}>
          <TouchableOpacity
            onPress={() => {
              console.log('Entery');
              navigation.navigate('SecondScreen');
            }}>
            <Image
              style={styles.endLogo}
              source={require('../assets/icons/Plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default DashBoard;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  item2: {
    padding: 9,
    marginVertical: 10,
    marginHorizontal: 8,
    alignItems: 'center',
    flex: 1,
    width: 180,
    height: 100,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  Background1: {
    borderRadius: 30,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
  },
  Background2: {
    borderRadius: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
    //width:300,
  },
  Background3: {
    borderRadius: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 100,
    height: 40,

    marginTop: 25,
  },
  Background4: {
    borderRadius: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: 30,
    height: 70,
  },
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 400,
  },
  endLogo: {
    marginTop: -100,
    marginLeft: 300,
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  nxtscreen: {
    paddingTop: 0,
    marginTop: 0,
  },
});
