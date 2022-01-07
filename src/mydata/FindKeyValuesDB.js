import database from '@react-native-firebase/database';
import { AddNewDataBase } from './AddNewDataBase';

export const FindKeyValuesDB = (values,ContentValue,colorBackground, SetArchiveValue, SetPinValue) => {
  console.log("FindKeyValuesDB SetArchiveValue",SetArchiveValue);
  database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
     // console.log('User data read once: ', snapshot.val());
      if (snapshot.val() === null) {
        console.log('EMpty', snapshot.val());
        AddNewDataBase(values,ContentValue,1,colorBackground, SetArchiveValue,SetPinValue);
      } else {
        let Readvalues = Object.values(snapshot.val());
        
        //console.log('READ VALUES snapshot.key', Readvalues);
        let len=Readvalues.length + 1;
        //let len=Math.floor(Math.random() * 1000);
        console.log("Length",len);
        AddNewDataBase(values,ContentValue,len,colorBackground, SetArchiveValue,SetPinValue);
      }
    })
    .catch(err => console.error('error: ' + err));
};
