import database from '@react-native-firebase/database';
import { AddEditDB } from './AddEditedDB';
import { RemoveParticularData } from './RemoveParticularData';

 export const UpdataDBEditData = (updateValue,values, ContentValue, KeyId, colorBackground) => {
  console.log("updateValue",updateValue);
  
  const newReference = database().ref('/user').push();
  console.log('Auto generated key: ', newReference.key);

  
   newReference
    .update({
        updateValue
    })
    .then(() => console.log(' updated edit data'));
    AddEditDB(values, ContentValue, KeyId, colorBackground);

};
