import database from '@react-native-firebase/database';

export const AddNewDataBase = (values,ContentValue,key) => {
  const newReference = database().ref('/user').push();
  console.log('Auto generated key: ', newReference.key);

  newReference
    .set({
      Title: values,
      ContentValue:ContentValue,
      key:key,
    })
    .then(() => console.log('Data updated.'));
};
