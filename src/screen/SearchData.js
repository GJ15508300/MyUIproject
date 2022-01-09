import database from '@react-native-firebase/database';
import * as React from 'react';

import {TouchableOpacity} from 'react-native';
import {View, FlatList, StyleSheet, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReadDatabase from '../mydata/ReadDatabase';
import PropTypes from 'prop-types'
let Readvalues;
let myjsondata;

function SearchData({SearchParameter}) {
    React.useEffect(() => { 
        console.log('USE Effect');
         
      }, [SearchParameter]);
    
      SearchData.propTypes = {
        SearchParameter: PropTypes.string
      }

    console.log("SearchParameter =>",SearchParameter);
  const navigation = useNavigation();


  async function ReadData() {
    Readvalues = await ReadDatabase();
    //console.log('read values == ', Readvalues);
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
        console.log("item.title ",item.title ),
      item.title === JSON.stringify(SearchParameter) ?
      
      
      <TouchableOpacity
    
        onPress={() => {
          navigation.navigate('Mydatabase', {
            KeyId: item.key,
            Title: item.title,
            Content: item.ContentValue,
            BackgroundColorHexValue: item.BackgroundColor,
            index: index,
            PinValue : item.PinMyData,
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
          
        </View>
      </TouchableOpacity>
     
      : null
    );
  };

  return (
    <View style={{flex: 0.9}}>
      <View>
      <FlatList
        data={Readvalues}
        renderItem={renderItem1}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={1}
      />
      </View>
    </View>
  );
}
export default SearchData;

const styles = StyleSheet.create({
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    width: 400,
  },
  RenderStylePinned: {
    width: 400,
  },
});
