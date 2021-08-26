import { Header } from '../../components/Header';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Fieldset } from '../../components/Fieldset';
import { FormGroup } from '../../components/FormGroup';

import plusIcon from '../../assets/plus-symbol.svg';
import warningIcon from '../../assets/warning.svg';

import {
  Container,
  Wrapper,
  Form,
  PlusIcon,
  Row,
  Footer,
  Warning,
  WarningIcon,
  Button,
} from './styles';

export function GiveClasses() {
  return (
    <Container>
      <Header />

      <ThumbTexts
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Wrapper>
        <Form>
          <Fieldset legend="Seus dados">
            <FormGroup
              title="Nome completo"
              name="name"
            >
              <input type="text" name="name" id="name" />
            </FormGroup>

            <FormGroup
              title="Link da sua foto"
              subtitle="comece com http://"
              name="avatar"
            >
              <input type="url" name="avatar" id="avatar" />
            </FormGroup>

            <FormGroup
              title="WhatsApp"
              subtitle="somente números"
              name="whatsapp"
            >
              <input type="text" name="whatsapp" id="whatsapp" />
            </FormGroup>

            <FormGroup
              title="Biografia"
              name="bio"
            >
              <textarea name="bio" id="bio" />
            </FormGroup>
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <FormGroup
              title="Matéria"
              name="school-subject"
            >
              <select name="school-subject" id="school-subject">
                <option value="matematica">Matemática</option>
                <option value="ingles">Inglês</option>
                <option value="historia">História</option>
                <option value="geografia">Geografia</option>
                <option value="quimica">Química</option>
              </select>
            </FormGroup>

            <FormGroup
              title="Custo da sua hora por aula"
              subtitle="em R$"
              name="price"
            >
              <input type="number" name="price" id="price" />
            </FormGroup>
          </Fieldset>

          <Fieldset
            legend={(
              <>
                Horários disponíveis
                <button type="button">
                  <PlusIcon src={plusIcon} />
                  Novo horário
                </button>
              </>
            )}
          >
            <Row>
              <FormGroup
                title="Dia da semana"
                name="weekday"
              >
                <div>
                  <select name="weekday" id="weekday">
                    <option value="monday">Segunda-feira</option>
                    <option value="tuesday">Terça-feira</option>
                    <option value="wednesday">Quarta-feira</option>
                    <option value="thursday">Quinta-feira</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                  </select>
                </div>
              </FormGroup>

              <FormGroup
                title="Das"
                name="from"
              >
                <input type="number" name="from" id="from" />
              </FormGroup>

              <FormGroup
                title="Até"
                name="to"
              >
                <input type="number" name="to" id="to" />
              </FormGroup>
            </Row>
          </Fieldset>

          <Footer>
            <Warning>
              <WarningIcon src={warningIcon} />
              <div>
                <span>Importante</span>
                <span>Preencha todos os dados</span>
              </div>
            </Warning>

            <Button>Salvar Cadastro</Button>
          </Footer>
        </Form>
      </Wrapper>
    </Container>
  );
}
