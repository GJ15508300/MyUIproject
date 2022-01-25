import * as React from 'react';

function SetColorMyData()
{
    const route = useRoute();
  const navigation = useNavigation();
  React.useEffect(() => {
    if (route.params?.ColorCode) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log('KEy Find', route.params.key);
    }
  }, [route.params?.ColorCode]);

}
export default SetColorMyData;