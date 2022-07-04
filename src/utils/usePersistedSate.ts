import { useState, useEffect } from 'react';

function usePersistedState(key: any, initialState: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    console.log('storageValue:', storageValue)

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
export default usePersistedState;