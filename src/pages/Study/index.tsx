import { Header } from '../../components/Header';
import { Proffy } from '../../components/Proffy';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Wrapper } from '../../components/Wrapper';
import { Select } from '../../components/FormElements';

import { useProffy } from '../../hooks/useProffy';

import { weekdays } from '../../mocks/weekdays';
import { schoolSubjects } from '../../mocks/schoolSubjects';

import { Container, Filters, Proffys } from './styles';

export function Study() {
  const { proffys } = useProffy();

  return (
    <Container>
      <Header />

      <ThumbTexts title="Estes são os proffys disponíveis." />

      <Filters>
        <div>
          <div>
            <span>Matéria</span>
            <Select name="weekday" id="weekday">
              <option value="">Selecione</option>
              {schoolSubjects.map(({ schoolSubject, value }) => (
                <option key={value} value={value}>
                  {schoolSubject}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <span>Dia da semana</span>
            <Select name="weekday" id="weekday">
              <option value="">Selecione</option>
              {weekdays.map(({ weekday, value }) => (
                <option key={value} value={value}>
                  {weekday}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <span>Horário</span>
            <Select name="weekday" id="weekday">
              <option value="">Selecione</option>
              <option value="8-9">8:00 - 9:00</option>
            </Select>
          </div>
        </div>
      </Filters>

      <Wrapper>
        <Proffys>
          {proffys.map((proffy) => (
            <Proffy
              key={proffy.id}
              name={proffy.name}
              schoolSubject={proffy.schoolSubject}
              avatar={proffy.avatar}
              price={proffy.price}
              whatsapp={proffy.whatsapp}
              bio={proffy.bio}
            />
          ))}
        </Proffys>
      </Wrapper>
    </Container>
  );
}
