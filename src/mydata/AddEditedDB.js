import database from '@react-native-firebase/database';
export const AddEditDB = async (
  values,
  ContentValue,
  KeyId,
  colorBackground,
  index,
) => {
  let MYreadDB;
  let Refrencekey = [];
  MYreadDB = await database()
    .ref('/user')
    .once('value', function (snapshot) {
      // console.log('snapshot', snapshot);
      snapshot.forEach(function (childSnapShot) {
        Refrencekey.push(childSnapShot.key);
      });
    });

  let UpdateDataObj = {
    title: values,
    ContentValue: ContentValue,
    key: KeyId,
    BackgroundColor: colorBackground,
  };

  const newReference = database().ref('/user').child(Refrencekey[index]);

  newReference
    .update(UpdateDataObj)
    .then(() => console.log(' updated edit data'))
    .catch(err => {
      console.log('error', err);
    });
};
