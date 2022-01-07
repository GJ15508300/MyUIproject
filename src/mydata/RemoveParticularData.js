import * as React from 'react';
import database from '@react-native-firebase/database';

export const RemoveParticularData = async (DeleteDataIndex) => {
  console.log(' RemoveParticularData', DeleteDataIndex);
  let MYreadDB;
  let Refrencekey = [];
  MYreadDB = await database()
    .ref('/user')
    .once('value', function (snapshot) {
      // console.log('snapshot', snapshot);
      snapshot.forEach(function (childSnapShot) {
        Refrencekey.push(childSnapShot.key);
        console.log('Refrencekey', Refrencekey);
      });
    });
  await database().ref('/user').child(Refrencekey[DeleteDataIndex]).set(null);
};
