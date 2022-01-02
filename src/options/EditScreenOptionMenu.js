import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Text, Image, StyleSheet, Pressable} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import JSONColorData from '../mydata/colors/JsonColorData.json';
import {RemoveParticularData} from '../mydata/RemoveParticularData';
import JSONEditData from './JSONEditOptionData.json';
function EditScreenOptionMenu(DeleteDataIndex) {
  console.log('DeleteDataIndex ', DeleteDataIndex);
  const refRBSheet = useRef();
  const [DataDeleted, setDataDeleted] = useState();
  useEffect(() => {});

  renderColorItem1 = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          console.log('FF Clicked');
          item.title === 'Delete'
            ? RemoveParticularData(DeleteDataIndex)
            : null;
        }}>
        <View style={[styles.RenderitemStyle]}>
          {/* <Text>{item.id}</Text> */}
          <View
            style={{
              height: 30,
              width: 250,
            }}>
            <Text style={{fontSize: 20}}>{item.title}</Text>
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
          source={require('../assets/icons/editScreen3dot.png')}
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
            showsHorizontalScrollIndicator={false}
            data={JSONEditData}
            renderItem={renderColorItem1}
            keyExtractor={item => item.id}
          />
        </View>
      </RBSheet>
    </View>
  );
}
export default EditScreenOptionMenu;

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
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

//   const refRBSheet = useRef();
//   // refRBSheet.current.open()
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'flex-end',
//         backgroundColor: 'white',
//       }}>
//       <TouchableOpacity
//         onPress={() => {
//           console.log('pressed option');
//           refRBSheet.current.open();
//         }}>
//         <Image
//           style={styles.tinyLogo}
//           source={require('../assets/icons/editScreen3dot.png')}
//         />
//       </TouchableOpacity>

//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={false}
//         customStyles={{
//           wrapper: {
//             backgroundColor: 'transparent',
//           },
//           draggableIcon: {
//             backgroundColor: '#000',
//           },
//         }}>
//         <TouchableOpacity onPress={console.log('Touch')}>
//           <View
//             style={{
//               justifyContent: 'space-evenly',
//               alignItems: 'flex-start',
//               padding: 20,
//             }}>
//             <Text style={{fontSize: 30}}> Delete </Text>
//             <Text> Make a Copy </Text>
//             <Text> Send </Text>
//             <Text> Collaborator </Text>
//             <Text> Lables </Text>
//           </View>
//         </TouchableOpacity>

//       </RBSheet>
//     </View>
//   );
// }
// export default EditScreenOptionMenu;

// const styles = StyleSheet.create({
//   tinyLogo: {
//     margin: 15,
//     width: 40,
//     height: 30,
//   },
//   Circle: {
//     margin: 15,
//     width: 40,
//     height: 30,
//     borderRadius: 30,
//   },
// });
