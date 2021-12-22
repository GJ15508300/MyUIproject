import database from '@react-native-firebase/database';
import { AddNewDataBase } from './AddNewDataBase';

export const FindKeyValuesDB = (values,ContentValue) => {
  database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
      console.log('User data read once: ', snapshot.val());
      if (snapshot.val() === null) {
        console.log('EMpty', snapshot.val());
        AddNewDataBase(values,ContentValue,1);
      } else {
        let Readvalues = Object.values(snapshot.val());
        console.log('READ VALUES', Readvalues);
    //   let   GGReadvalues = JSON.stringify(Readvalues);
    //     console.log('READ VALUES', GGReadvalues);
        let len=Readvalues.length + 1;
        console.log("Length",len);
        AddNewDataBase(values,ContentValue,len);
      }
    })
    .catch(err => console.error('error: ' + err));
};
