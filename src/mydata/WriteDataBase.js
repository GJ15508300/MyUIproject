import database from '@react-native-firebase/database';
import ReadDatabase from './ReadDatabase';

export const WriteDataBase = (WriteData, KeyValue) => {
  const reference = database().ref('/user');
  reference.set({
      Title: WriteData,
      Key: KeyValue,
    })
    .then(() => console.log('Data set.'))
    .catch(err => console.error('error: ' + err));
};
