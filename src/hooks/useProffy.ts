import { useContext } from 'react';
import { ProffyContext } from '../contexts/ProffyContext';

export function useProffy() {
  const data = useContext(ProffyContext);
  return data;
}
