import database from '@react-native-firebase/database';
import {WriteDataBase} from './WriteDataBase';
const reference = database().ref('/user');

async function ReadDatabase() {
  let MYreadDB;
  let Readvalues = [];
  let key = [];
  MYreadDB = await database()
    .ref('/user')
    .once('value', function (snapshot) {
      //console.log("snapshot",snapshot);
      snapshot.forEach(function (childSnapShot) {
        Readvalues.push(childSnapShot.val());
        key.push(childSnapShot.key);
      });
    })
    .then(snapshot => {})
    .catch(err => console.error('error: ' + err));
  return Readvalues;
}
export default ReadDatabase;
