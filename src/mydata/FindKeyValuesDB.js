import database from '@react-native-firebase/database';
import { AddNewDataBase } from './AddNewDataBase';

export const FindKeyValuesDB = (values,ContentValue,colorBackground) => {
  database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
      console.log('User data read once: ', snapshot.val());
      if (snapshot.val() === null) {
        console.log('EMpty', snapshot.val());
        AddNewDataBase(values,ContentValue,1,colorBackground);
      } else {
        let Readvalues = Object.values(snapshot.val());
        console.log('READ VALUES', Readvalues);
        let len=Readvalues.length + 1;
        console.log("Length",len);
        AddNewDataBase(values,ContentValue,len,colorBackground);
      }
    })
    .catch(err => console.error('error: ' + err));
};
