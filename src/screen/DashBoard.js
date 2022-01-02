import * as React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DisplayDataBase from '../mydata/DisplayDataBase';
import DisplayDBSingleView from './DisplayDBSingleView';

function DashBoard({route}) {
  const {flag} = route?.params ?? {};
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [clickcheck, setcheck] = useState(0);

  React.useEffect(() => {
    console.log('USE Effect');
    DisplayDataBase;
  }, [flag]);

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
      {clickcheck % 2 === 1 ? <DisplayDataBase /> : <DisplayDBSingleView />}

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
    marginLeft: 300,
    width: 70,
    height: 70,
    borderRadius: 30,
  },
});
