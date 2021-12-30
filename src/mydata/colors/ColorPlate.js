import React, {useRef} from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';

function ColorPlate() {
  const refRBSheet = useRef();
  
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
          source={require('./ColorPlateIcons/editScreenColor.png')} />
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
        
        <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundColor: 'white',
          flexDirection:'row'
        }}>
        <TouchableOpacity 
        onPress={() => {console.log('green color');
        navigation.navigate('SetColorMyData', {ColorCode : "#00FF00" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/greenColor.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "	#800000" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/Maroon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#800080" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/purple.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#808000" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/OliveColor.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#808080" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/gray.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#000000" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/black.png')}
        />
      </TouchableOpacity>
</View>
<View
style={{
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  flexDirection:'row'
}}>
      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#FF5F1F" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/neonOrange.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#FFC0CB" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/pink.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#FFFF00" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/yellow.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#23238E" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/jacksonsBlue.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {console.log('cornflower Blue color');
        navigation.navigate('SetColorMyData', {ColorCode : "#5e7286" });          
        }}>        
        <Image
          style={styles.Circle}
          source={require('./ColorPlateIcons/vikingBlue.png')}
        />
      </TouchableOpacity>
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
    borderRadius:30,
  },
});
