import { schoolSubjects } from '../mocks/schoolSubjects';

export function getSchoolSubject(name: string) {
  return (
    schoolSubjects.find(({ value }) => value === name)?.schoolSubject || ''
  );
}
