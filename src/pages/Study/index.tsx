import { useState, useMemo } from 'react';

import { Header } from '../../components/Header';
import { Proffy } from '../../components/Proffy';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Wrapper } from '../../components/Wrapper';
import { Select } from '../../components/FormElements';

import { useProffy } from '../../hooks/useProffy';
import { formatHours } from '../../utils/formatHours';

import { weekdays } from '../../mocks/weekdays';
import { schoolSubjects } from '../../mocks/schoolSubjects';

import emptyBanner from '../../assets/empty-banner.svg';

import { Container, Filters, Filter, Proffys, Empty } from './styles';

export function Study() {
  const [subjectFilter, setSubjectFilter] = useState('');
  const [dayFilter, setDayFilter] = useState('');
  const [hourFilter, setHourFilter] = useState('');

  const { proffys } = useProffy();

  const hours = useMemo(
    () => Array.from({ length: 24 }).map((_, index) => index, []),
    [],
  );

  const filteredProffys = useMemo(() => {
    if (!subjectFilter && !dayFilter && !hourFilter) return proffys;

    const proffysBySubject = proffys.filter((proffy) =>
      [proffy.schoolSubject, ''].includes(subjectFilter),
    );

    if (!dayFilter && !hourFilter) return proffysBySubject;

    const proffysByDay = proffysBySubject.filter((proffy) =>
      proffy.classes.some((proffyClass) =>
        [proffyClass.weekday, ''].includes(dayFilter),
      ),
    );

    const proffysByHour = proffysByDay.filter((proffy) =>
      proffy.classes.some((proffyClass) => {
        if (hourFilter === '') return true;
        return (
          proffyClass.hoursFrom === +hourFilter &&
          [proffyClass.weekday, ''].includes(dayFilter)
        );
      }),
    );

    return proffysByHour;
  }, [subjectFilter, dayFilter, hourFilter]);

  return (
    <Container>
      <Header />

      <ThumbTexts title="Estes são os proffys disponíveis." />

      <Filters>
        <div>
          <Filter>
            <span>Matéria</span>
            <Select
              name="school-subject"
              id="school-subject"
              onChange={({ target }) => setSubjectFilter(target.value)}
            >
              <option value="">Selecione</option>
              {schoolSubjects.map(({ schoolSubject, value }) => (
                <option key={value} value={value}>
                  {schoolSubject}
                </option>
              ))}
            </Select>
          </Filter>

          <Filter>
            <span>Dia da semana</span>
            <Select
              name="weekday"
              id="weekday"
              onChange={({ target }) => setDayFilter(target.value)}
            >
              <option value="">Selecione</option>
              {weekdays.map(({ weekday, value }) => (
                <option key={value} value={value}>
                  {weekday}
                </option>
              ))}
            </Select>
          </Filter>

          <Filter>
            <span>Horário</span>
            <Select
              name="hour"
              id="hour"
              onChange={({ target }) => setHourFilter(target.value)}
            >
              <option value="">Selecione</option>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {formatHours(hour)}
                </option>
              ))}
            </Select>
          </Filter>
        </div>
      </Filters>

      <Wrapper>
        <Proffys>
          {filteredProffys.length === 0 ? (
            <Empty>
              <h2>Nenhum proffy foi cadastrado.</h2>
              <img src={emptyBanner} alt="Nenhum proffy foi cadastrado." />
            </Empty>
          ) : (
            filteredProffys.map((proffy) => (
              <Proffy
                key={proffy.id}
                name={proffy.name}
                schoolSubject={proffy.schoolSubject}
                avatar={proffy.avatar}
                price={proffy.price}
                whatsapp={proffy.whatsapp}
                bio={proffy.bio}
              />
            ))
          )}
        </Proffys>
      </Wrapper>
    </Container>
  );
}
