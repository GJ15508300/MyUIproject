import database from '@react-native-firebase/database';
import {WriteDataBase} from './WriteDataBase';
const reference = database().ref('/user');

async function ReadDatabase() {
  
  let MYreadDB;
  let Readvalues;
  MYreadDB = await database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
      console.log("______________________________________________________________________");
      if (snapshot.val() === null) {
      } else {
        Readvalues = Object.values(snapshot.val());
      }
    })
    .catch(err => console.error('error: ' + err));
  // console.log("MY read DB",MYreadDB,Readvalues);
  return Readvalues;
}
export default ReadDatabase;
