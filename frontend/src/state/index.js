import { useGlobalState, setGlobalState } from './useAuth';

const useAuth = () => {
  const users = useGlobalState('currentUser');
  const currentUser = users[0];
  const register = async (data) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (final) => {
        const userObj = {
          id: final.id,
          username: final.username,
          email: final.email,
        };
        await localStorage.setItem('userToken', JSON.stringify(userObj));
        await setGlobalState('currentUser', userObj);
      });
  };
  const login = async (data) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(async (final) => {
        const userObj = {
          id: final.user.id,
          username: final.user.username,
          email: final.user.email,
        };
        await localStorage.setItem('userToken', JSON.stringify(userObj));
        await setGlobalState('currentUser', userObj);
      });
  };
  const signOut = async () => {
    await localStorage.removeItem('userToken');
    await setGlobalState('currentUser', null);
  };
  return {
    register, login, currentUser, signOut,
  };
};

export default useAuth;
