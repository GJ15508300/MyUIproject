import React, {useRef} from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';

function EditScreenOptionMenu() {
  const refRBSheet = useRef();
  // refRBSheet.current.open()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      /> */}
      <TouchableOpacity
        onPress={() => {
          console.log('pressed option');
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
            <TouchableOpacity
            onPress={console.log("clicked")}
            
            > 
        <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
             
          }}> 

      
        <Text>  Delete </Text>
        <Text> Make a Copy </Text>
        <Text> Send  </Text>
        <Text> Collaborator </Text>
        <Text> Lables </Text>
        </View>
        </TouchableOpacity>



        <Image/>
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
    borderRadius:30,
  },
});
