import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { getSchoolSubject } from '../utils/getSchoolSubject';

type Class = {
  weekday: string;
  hoursFrom: number;
  hoursTo: number;
};

type Proffy = {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  schoolSubject: string;
  price: number;
  classes: Class[];
};

type NewProffy = Omit<Proffy, 'id'>;

type ProffyContextProps = {
  proffys: Proffy[];
  addNewProffy: (proffy: NewProffy) => void;
};

export const ProffyContext = createContext({} as ProffyContextProps);

export function ProffyProvider({ children }: PropsWithChildren<ReactNode>) {
  const [proffys, setProffys] = useState<Proffy[]>([]);
  const history = useHistory();

  function addNewProffy(proffy: NewProffy) {
    const newProffy: Proffy = {
      id: uuid(),
      ...proffy,
      schoolSubject: getSchoolSubject(proffy.schoolSubject),
    };

    setProffys((prevProffys) => [...prevProffys, newProffy]);
    history.push('/study');
  }

  return (
    <ProffyContext.Provider value={{ proffys, addNewProffy }}>
      {children}
    </ProffyContext.Provider>
  );
}
