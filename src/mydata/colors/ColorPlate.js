import * as React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
function ColorPlate() {

  async function ReadData() {
    Readvalues = await ReadDatabase();
    console.log('outSide of read values == Readvalues', Readvalues);
    myjsondata = JSON.stringify(Readvalues);
    console.log('JSON', myjsondata);
  }
  ReadData();
 
  var Colors = {
    products: [
      {product: 'Red', id: 1},
      {product: 'Yellow', id: 2},
      {product: 'Orange', id: 3},
      {product: 'Black', id: 4},
      {product: 'pink', id: 5},
      {product: 'Blue', id: 6},
      {product: 'Green', id: 7},
      {product: 'SkyBlue', id: 8},
      {product: 'LightGreen', id: 9},
      {product: 'LightGray', id: 10},
      {product: 'lightBlue', id: 11},
      {product: 'Gray', id: 12},
    ],
  };


  async function ReadData() {
    Readvalues = await ReadDatabase();
    console.log('outSide of read values == Readvalues', Readvalues);
    myjsondata = JSON.stringify(Readvalues);
    console.log('JSON', myjsondata);
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
  renderItem1 = ({item}) => {
    const randomNumber = () => Math.floor(Math.random() * 255) + 1;
    const getRandomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    return (
      <TouchableOpacity onPress={() => alert('Hey!! Usr')}>
        <View
          style={[styles.RenderitemStyle, {backgroundColor: getRandomColor}]}>
          <Text>{item.key}</Text>
          <Text>{item.title}</Text>
          <Text>{item.ContentValue}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };



  console.log('Enter color');
  return (
    <View style={{flex:.1}}>
        {/* <Text>Hai</Text> */}

        
         <ModalDropdown options={Colors}></ModalDropdown>
        {/*<Modal
            animationType = {"slide"}
            transparent={false}
            visible={isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>
              </Modal> */}

              <FlatList
        data={Readvalues}
        renderItem={renderItem1}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={ItemSeparator}
        numColumns={2}
      />





        {/* <FlatList
        data={Colors}
        
        style={styles.list}
        keyExtractor={(item, i) => `key-${i}`}
        renderItem={_renderItem}
        ItemSeparatorComponent={renderSeparator || this._renderSeparator}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      /> */}






      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.contentContainerStyle}
        //horizontal={true}
        showsVerticalScrollIndicator={false}
      >

        {Colors.products.map((item, index) => (
          <View key={item.id} style={styles.colorsStyle}>
            <Text>{item.product}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}
export default ColorPlate;


// _renderItem = ({ item, index, separators }) => {
//   const {
//     renderRow,
//     dropdownTextStyle,
//     dropdownTextHighlightStyle,
//     accessible
//   } = this.props;
//   const { selectedIndex } = this.state;
//   const key = `row_${index}`;
//   const highlighted = index === selectedIndex;
//   const row = !renderRow ? (
//     <Text
//       style={[
//         styles.rowText,
//         dropdownTextStyle,
//         highlighted && styles.highlightedRowText,
//         highlighted && dropdownTextHighlightStyle
//       ]}
//     >
//       {item}
//     </Text>
//   ) : (
//     renderRow(item, index, highlighted)
//   );
//   const preservedProps = {
//     key,
//     accessible,
//     onPress: () => this._onRowPress(item, index, separators)
//   };
//   if (TOUCHABLE_ELEMENTS.find(name => name === row.type.displayName)) {
//     const props = { ...row.props };
//     props.key = preservedProps.key;
//     props.onPress = preservedProps.onPress;
//     const { children } = row.props;
//     switch (row.type.displayName) {
//       case "TouchableHighlight": {
//         return <TouchableHighlight {...props}>{children}</TouchableHighlight>;
//       }
//       case "TouchableOpacity": {
//         return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
//       }
//       case "TouchableWithoutFeedback": {
//         return (
//           <TouchableWithoutFeedback {...props}>
//             {children}
//           </TouchableWithoutFeedback>
//         );
//       }
//       case "TouchableNativeFeedback": {
//         return (
//           <TouchableNativeFeedback {...props}>
//             {children}
//           </TouchableNativeFeedback>
//         );
//       }
//       default:
//         break;
//     }
//   }
//   return <TouchableHighlight {...preservedProps}>{row}</TouchableHighlight>;
// };

const styles = StyleSheet.create({
  colorsStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'yellow',
    margin: 2,
    borderWidth: 3,
    borderColor: 'pink',
  },
  contentContainerStyle: {
    backgroundColor: 'green',
    paddingVertical: 10,
    marginTop: 40,
  },
  RenderitemStyle: {
    padding: 1,
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 20,
    width: Dimensions.get('window').width / 2,
  },
});





