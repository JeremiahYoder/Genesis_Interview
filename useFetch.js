import {useCallback, useState} from 'react';

// Implement a custom `useFetch` hook, that takes a
// url  `[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)` as
// parameter, and returns the data. hook should be in a
// separated file, then import it inside `App.tsx`

const URL = 'https://jsonplaceholder.typicode.com/users';

const useFetch = () => {
  const [isFetchingUsers, setFetchingUsers] = useState(false);

  const getUsers = useCallback(async () => {
    let result = {};

    try {
      await setFetchingUsers(true);

      async function exec() {
        const userResponse = await fetch(URL, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
          .then(response => response.json())
          .finally(() => {
            setFetchingUsers(false);
          })
          .catch(e => {
            console.log(e);
          });

        return userResponse;
      }

      result = exec();
    } catch (e) {
      return {
        code: 101,
        error: e,
      };
    }

    if (result) {
      return result;
    }
  }, []);

  return {
    isLoading: isFetchingUsers,
    getUsers,
  };
};

export default useFetch;
