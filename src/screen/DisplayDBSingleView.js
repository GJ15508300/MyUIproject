import database from '@react-native-firebase/database';
import * as React from 'react';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ReadDatabase from '../mydata/ReadDatabase';
let Readvalues;
let myjsondata;

function DisplayDBSingleView() {
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
  renderItem1 = ({item , index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
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
      />
    </View>
  );
}
export default DisplayDBSingleView;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    width: 400,
  },
});
