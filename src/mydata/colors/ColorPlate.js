import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import JSONColorData from './JsonColorData.json';

function ColorPlate({setColorBackground}) {
  const refRBSheet = useRef();
  useEffect(() => {
    
  });

  renderColorItem1 = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          console.log('FF Clicked');
          console.log('item.title', item.HexCode);
          setColorBackground(item.HexCode);
        }}>
        <View style={[styles.RenderitemStyle]}>
          {/* <Text>{item.id}</Text> */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: item.HexCode,
              borderRadius: 20,
            }}>
            {/* <Text>{item.title}</Text>     */}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log('pressed color');
          refRBSheet.current.open();
        }}>
        <Image
          style={styles.tinyLogo}
          source={require('./ColorPlateIcons/editScreenColor.png')}
        />
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{flex: 1}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={JSONColorData}
            renderItem={renderColorItem1}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          />
        </View>
      </RBSheet>
    </View>
  );
}
export default ColorPlate;

const styles = StyleSheet.create({
  tinyLogo: {
    margin: 15,
    width: 40,
    height: 30,
  },
  Circle: {
    margin: 15,
    width: 40,
    height: 30,
    borderRadius: 30,
  },
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    // width: Dimensions.get('window').width / 2,
  },
});
