import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, FlatList, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReadDatabase from '../mydata/ReadDatabase';
import ArchiveViewDouble from './ArchiveViewDouble';
import ArchiveViewSingle from './ArchiveViewSingle';
let Readvalues = [];
const Dimension = Dimensions.get('window').width / 2;
const DimensionSingleView = Dimensions.get('window').width;

function ArchiveData() {
    React.useEffect(() => {
        console.log('USE Effect');
        ArchiveViewDouble;
      }, []);
    
  const [clickcheck, setcheck] = React.useState(0);
  console.log('Entery');
  
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
        
        <View> 
        <TouchableOpacity
          onPress={() => {
            setcheck(clickcheck + 1);
          }}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/HamburgerMenu.png')}
          />
          </TouchableOpacity>
          </View>
          
          {console.log("clickcheck",clickcheck), clickcheck % 2 === 1 ? <ArchiveViewDouble /> : <ArchiveViewSingle/>}
   
    </View>
  );
}
export default ArchiveData;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 20,
    width: Dimension,
  },
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
});