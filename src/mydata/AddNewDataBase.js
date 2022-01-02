import database from '@react-native-firebase/database';

export const AddNewDataBase = (values,ContentValue,key,colorBackground) => {
  console.log("values,ContentValue,key",values,ContentValue,key);
  const newReference = database().ref('/user').push();
  console.log('Auto generated key: ', newReference.key);

  newReference
    .set({
      title: values,
      ContentValue:ContentValue,
      key:key,
      BackgroundColor:colorBackground,
    })
    .then(() => console.log('NEW Data Added.'));
};
