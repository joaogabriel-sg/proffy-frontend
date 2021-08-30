import { Header } from '../../components/Header';
import { Proffy } from '../../components/Proffy';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Wrapper } from '../../components/Wrapper';

import {
  Container,
  Filters,
  Proffys,
} from './styles';

export function Study() {
  return (
    <Container>
      <Header />

      <ThumbTexts
        title="Estes são os proffys disponíveis."
      />

      <Filters>
        <div>
          <div>
            <span>Matéria</span>
            <select name="weekday" id="weekday">
              <option value="">Selecione</option>
              <option value="math">Matemática</option>
              <option value="portuguese">Português</option>
            </select>
          </div>

          <div>
            <span>Dia da semana</span>
            <select name="weekday" id="weekday">
              <option value="">Selecione</option>
              <option value="monday">Segunda-feira</option>
            </select>
          </div>

          <div>
            <span>Horário</span>
            <select name="weekday" id="weekday">
              <option value="">Selecione</option>
              <option value="8-9">8:00 - 9:00</option>
            </select>
          </div>
        </div>
      </Filters>

      <Wrapper>
        <Proffys>
          <Proffy
            name="João Gabriel"
            schoolSubject="Química"
            avatar="https://avatars.githubusercontent.com/u/74667683?v=4"
            price={45}
            whatsapp="88988556677"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo diam, tempus sed sapien et, convallis consequat erat. Nulla lacinia vitae nisi quis rutrum. Integer tincidunt augue urna, at feugiat tortor posuere sed. Nulla auctor lacus at erat volutpat bibendum. Praesent lacinia gravida lorem, sit amet semper elit auctor sed. Curabitur luctus tempus turpis bibendum mattis. Mauris vulputate purus nec euismod mattis. Praesent facilisis, orci id auctor viverra, tortor metus fermentum magna, non volutpat magna quam vel justo. Aenean pharetra scelerisque arcu, sit amet congue orci porta in. Nullam non tristique mi, a finibus est. In sodales in dui non suscipit. Suspendisse ultricies id purus sed bibendum. Praesent aliquet sed lorem nec posuere."
          />
        </Proffys>
      </Wrapper>
    </Container>
  );
}
