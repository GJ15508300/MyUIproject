import database from '@react-native-firebase/database';

export const AddNewDataBase = (values,ContentValue,key,colorBackground,SetArchiveValue,SetPinValue) => {
  console.log("AddNewDataBase SetArchiveValue",SetArchiveValue);
  const newReference = database().ref('/user').push();
  console.log('Auto generated key: ', newReference.key);

  newReference
    .set({
      title: values,
      ContentValue:ContentValue,
      key:key,
      BackgroundColor:colorBackground,
      Archive :SetArchiveValue,
      PinMyData:SetPinValue,
    })
    .then(() => console.log('NEW Data Added.'));
};
