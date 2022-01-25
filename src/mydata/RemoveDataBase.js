import database from '@react-native-firebase/database';

export const RemoveDataBase = () => {
//   database().ref('/user')
//   .set(null);
  console.log('REMOVE');
  database().ref('/user').remove();
};
