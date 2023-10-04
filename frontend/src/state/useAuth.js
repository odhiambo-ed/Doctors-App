import { createGlobalState } from 'react-hooks-global-state';

const data = localStorage.getItem('userToken');
const user = JSON.parse(data);

const { setGlobalState, useGlobalState } = createGlobalState({
  currentUser: user || null,
});

export { setGlobalState, useGlobalState };
