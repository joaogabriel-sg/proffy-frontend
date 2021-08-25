import backIcon from '../../assets/back.svg';
import logoIcon from '../../assets/logo-small.svg';
import plusIcon from '../../assets/plus-symbol.svg';
import warningIcon from '../../assets/warning.svg';

import {
  Container,
  Header,
  HeaderContent,
  ArrowBack,
  Logo,
  Wrapper,
  Form,
  Fieldset,
  FormGroup,
  PlusIcon,
  Footer,
  Warning,
  WarningIcon,
  Button,
} from './styles';

export function GiveClasses() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <ArrowBack to="/">
              <img src={backIcon} alt="Voltar" />
            </ArrowBack>
            <Logo src={logoIcon} />
          </div>

          <div>
            <h2>Que incrível que você quer dar aulas.</h2>
            <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
          </div>
        </HeaderContent>
      </Header>

      <Wrapper>
        <Form>
          <Fieldset>
            <legend>Seus dados</legend>

            <FormGroup>
              <label htmlFor="name">
                <span>Nome completo</span>
                <input type="text" name="name" id="name" />
              </label>
            </FormGroup>

            <FormGroup>
              <label htmlFor="avatar">
                <span>
                  Link da sua foto
                  <small>(comece com http://)</small>
                </span>
                <input type="text" name="avatar" id="avatar" />
              </label>
            </FormGroup>

            <FormGroup>
              <label htmlFor="whatsapp">
                <span>
                  WhatsApp
                  <small>(somente números)</small>
                </span>
                <input type="text" name="whatsapp" id="whatsapp" />
              </label>
            </FormGroup>

            <FormGroup>
              <label htmlFor="bio">
                <span>Biografia</span>
                <textarea name="bio" id="bio" />
              </label>
            </FormGroup>
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <FormGroup>
              <label htmlFor="school-subject">
                <span>Matéria</span>
                <select name="school-subject" id="school-subject">
                  <option value="matematica">Matemática</option>
                  <option value="ingles">Inglês</option>
                  <option value="historia">História</option>
                  <option value="geografia">Geografia</option>
                  <option value="quimica">Química</option>
                </select>
              </label>
            </FormGroup>

            <FormGroup>
              <label htmlFor="avatar">
                <span>
                  Custo da sua hora por aula
                  <small>(em R$)</small>
                </span>
                <input type="number" name="price" id="price" />
              </label>
            </FormGroup>
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button">
                <PlusIcon src={plusIcon} />
                Novo horário
              </button>
            </legend>

            <FormGroup className="available-times">
              <div>
                <label htmlFor="weekday">
                  <span>Dia da semana</span>
                  <select name="weekday" id="weekday">
                    <option value="monday">Segunda-feira</option>
                    <option value="tuesday">Terça-feira</option>
                    <option value="wednesday">Quarta-feira</option>
                    <option value="thursday">Quinta-feira</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                  </select>
                </label>
              </div>

              <div>
                <label htmlFor="from">
                  <span>Das</span>
                  <input type="number" name="from" id="from" />
                </label>
              </div>

              <div>
                <label htmlFor="to">
                  <span>Até</span>
                  <input type="number" name="to" id="to" />
                </label>
              </div>
            </FormGroup>
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
