import * as React from 'react';
import ReadDatabase from './ReadDatabase';
import JSONDATA from '../FlatList/JsonData.json';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
let Readvalues = [];
let myjsondata = [];
let UserKey;
const Dimension = Dimensions.get('window').width / 2;
const DimensionSingleView = Dimensions.get('window').width;

function DisplayDataBase() {
  console.log('Entery');
  const navigation = useNavigation();

  async function ReadData() {
    Readvalues = await ReadDatabase();
    console.log('read values', Readvalues);
    // UserKey = Readvalues.key;
    // myjsondata = Readvalues.Readvalues;
    //myjsondata = Readvalues;
    //console.log('JSON', myjsondata);
  }
  ReadData();
  // const [isFetching, setIsFetching] = React.useState(false);
  // React.useEffect(() => {
  // }, [Readvalues]);

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
      <TouchableOpacity
        onPress={() => {
          // console.log(
          //   'item.backgroundColor index',
          //   item.BackgroundColor,
          //   index,
          // );
          navigation.navigate('Mydatabase', {
            KeyId: item.key,
            Title: item.title,
            Content: item.ContentValue,
            BackgroundColorHexValue: item.BackgroundColor,
            index: index,
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
    );
  };

  return (
    <View style={{flex: 0.9}}>
      <FlatList
        data={Readvalues}
        renderItem={renderItem1}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={2}
      />
    </View>
  );
}
export default DisplayDataBase;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 20,
    width: Dimension,
  },
});
