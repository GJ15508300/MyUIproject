import * as React from 'react';
import database from '@react-native-firebase/database';
let NoOfMyData;
database()
  .ref('/user')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
