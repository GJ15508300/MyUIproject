import database from '@react-native-firebase/database';
import * as React from 'react';

export const UpdataDataBase = (values) => {
    database()
  .ref('/user').update({
    values
  })
  .then(() => console.log('Data updated.'));
  
};