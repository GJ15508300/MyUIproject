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
import DisplayDataBase from '../mydata/DisplayDataBase';

function DashBoard() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [mydata, setData] = useState('');
  const [clickcheck, setcheck] = useState(0);
  

  React.useEffect(() => {
    console.log('USE Effect');
    DisplayDataBase
  });
  
  // location.reload();

  //  window.location.reload();
  // window.location.href = window.location.href;
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
      {/* {clickcheck % 2 === 1 ? <AddNumberList /> : <SingleViewFlatList />} */}

      <DisplayDataBase />

      <View>
        <View style={styles.GroundBackground2}>
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
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('Entery');
              navigation.navigate('Mydatabase');
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
  GroundBackground2: {
    borderRadius: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: -100,
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
    // marginTop: -100,
    marginLeft: 300,
    width: 70,
    height: 70,
    borderRadius: 30,
  },
});
