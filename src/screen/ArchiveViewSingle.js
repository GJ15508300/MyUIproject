import database from '@react-native-firebase/database';
import * as React from 'react';

import {TouchableOpacity} from 'react-native';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReadDatabase from '../mydata/ReadDatabase';
let Readvalues;
let myjsondata;

function ArchiveViewSingle() {
  const navigation = useNavigation();

  const [isFetching, setIsFetching] = React.useState(false);

  async function ReadData() {
    Readvalues = await ReadDatabase();
    console.log('read values == ', Readvalues);
   // myjsondata = JSON.stringify(Readvalues);
    //console.log('JSON', myjsondata);
  }
  ReadData();

  ItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: 5,
          backgroundColor: 'pink',
        }}
      />
    );
  };
  renderItem1 = ({item, index}) => {
    return (
      item.Archive !== false ?
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Mydatabase', {
            KeyId: item.key,
            Title: item.title,
            Content: item.ContentValue,
            BackgroundColorHexValue: item.BackgroundColor,
            index: index,
            PinValue : item.PinMyData,
            ArchiveValue :item.Archive,
          });
        }}>
        <View
          style={[
            styles.RenderitemStyle,
            {backgroundColor: item.BackgroundColor},
          ]}>
             
          <Text>{item.key}</Text>
          <Text>{item.title}</Text>
          <Text>{item.ContentValue}</Text>
          {/* <Text>{item.BackgroundColor}</Text> */}
          
        </View>
      </TouchableOpacity>
      : null
    );
  };


  renderItem2 = ({item, index}) => {
    return (
      item.Archive !== false ?
      item.PinMyData !== false ?
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Mydatabase', {
            KeyId: item.key,
            Title: item.title,
            Content: item.ContentValue,
            BackgroundColorHexValue: item.BackgroundColor,
            index: index,
            PinValue : item.PinMyData,
            ArchiveValue :item.Archive,
          });
        }}>
        <View
          style={[
            styles.RenderitemStyle,
            {backgroundColor: item.BackgroundColor},
          ]}>
             
          <Text>{item.key}</Text>
          <Text>{item.title}</Text>
          <Text>{item.ContentValue}</Text>
          {/* <Text>{item.BackgroundColor}</Text> */}
          
        </View>
      </TouchableOpacity>
      
      : null
      :null
    );
  };

  return (
    <View style={{flex: 0.9}}>
      {/* <Text> Pinned</Text>
      <FlatList
        data={Readvalues}
        renderItem={renderItem2}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={1}
      /> */}
      <Text> Others</Text>
      <FlatList
        data={Readvalues}
        renderItem={renderItem1}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={1}
      />
    </View>
  );
}
export default ArchiveViewSingle;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    width: 400,
  },
});








































// import * as React from 'react';
// import {TouchableOpacity} from 'react-native';
// import {View, FlatList, StyleSheet, Text, Dimensions, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import ReadDatabase from '../mydata/ReadDatabase';
// import ArchiveViewDouble from './ArchiveViewDouble';
// import ArchiveViewSingle from './ArchiveViewSingle';
// let Readvalues = [];
// const Dimension = Dimensions.get('window').width / 2;
// const DimensionSingleView = Dimensions.get('window').width;

// function ArchiveData() {
    
//   const [clickcheck, setcheck] = React.useState(0);
//   console.log('Entery');
  
//   return (
//     <View style={{flex: 1,backgroundColor:'red'}}>
//         <Text> gj</Text>
//         <View> 
//         <TouchableOpacity
//           onPress={() => {
//             setcheck(clickcheck + 1);
//           }}>
//           <Image
//             style={styles.tinyLogo}
//             source={require('../assets/icons/HamburgerMenu.png')}
//           />
//           </TouchableOpacity>
        
//           {console.log("clickcheck",clickcheck), clickcheck % 2 === 1 ? <ArchiveViewDouble /> : <ArchiveViewSingle/>}
//       </View>
//     </View>
//   );
// }
// export default ArchiveData;

// const styles = StyleSheet.create({
//   RenderitemStyle: {
//     padding: 0,
//     marginVertical: 5,
//     marginHorizontal: 6,
//     fontSize: 20,
//     width: Dimension,
//   },
//   tinyLogo: {
//     margin: 15,
//     width: 40,
//     height: 30,
//   },
// });
