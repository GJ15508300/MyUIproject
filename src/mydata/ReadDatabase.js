import database from '@react-native-firebase/database';
import {WriteDataBase} from './WriteDataBase';
const reference = database().ref('/user');

function ReadDatabase() {
  database()
    .ref('/user')
    .once('value')
    .then(snapshot => {
      console.log('User data read once: ', snapshot.val());
      if (snapshot.val() === null) {
        console.log('EMpty', snapshot.val());
      } else {
        let Readvalues = Object.values(snapshot.val());
        console.log('READ VALUES', Readvalues);
      }
    })
    .catch(err => console.error('error: ' + err));
}
export default ReadDatabase;
