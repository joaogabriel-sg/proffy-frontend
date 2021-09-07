import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, initialValue: any = '') {
  const [state, setState] = useState(() => {
    const localItem = localStorage.getItem(key);

    if (localItem) {
      return JSON.parse(localItem);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
