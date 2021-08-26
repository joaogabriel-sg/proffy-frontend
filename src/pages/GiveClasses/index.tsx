import { useForm, SubmitHandler } from 'react-hook-form';

import { Header } from '../../components/Header';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Wrapper } from '../../components/Wrapper';
import { Fieldset } from '../../components/Fieldset';
import { FormGroup } from '../../components/FormGroup';

import plusIcon from '../../assets/plus-symbol.svg';
import warningIcon from '../../assets/warning.svg';

import { schoolSubjects } from '../../helpers/schoolSubjects';
import { weekdays } from '../../helpers/weekdays';

import {
  Container,
  Form,
  PlusIcon,
  Row,
  Footer,
  Warning,
  WarningIcon,
  Button,
} from './styles';

type FormValues = {
  name: string;
  avatar: string;
  whatsapp: number;
  bio: string;
  schoolSubject: string;
  price: number;
  weekday: string;
  hoursFrom: number;
  hoursTo: number;
}

export function GiveClasses() {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleSubmitNewProffy: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Header />

      <ThumbTexts
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Wrapper>
        <Form onSubmit={handleSubmit(handleSubmitNewProffy)}>
          <Fieldset legend="Seus dados">
            <FormGroup
              title="Nome completo"
              name="name"
            >
              <input {...register('name', { required: true })} id="name" />
            </FormGroup>

            <FormGroup
              title="Link da sua foto"
              subtitle="comece com http://"
              name="avatar"
            >
              <input type="url" {...register('avatar', { required: true })} id="avatar" />
            </FormGroup>

            <FormGroup
              title="WhatsApp"
              subtitle="somente números"
              name="whatsapp"
            >
              <input {...register('whatsapp', { required: true })} id="whatsapp" />
            </FormGroup>

            <FormGroup
              title="Biografia"
              name="bio"
            >
              <textarea {...register('bio', { required: true })} id="bio" />
            </FormGroup>
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <FormGroup
              title="Matéria"
              name="schoolSubject"
            >
              <select {...register('schoolSubject', { required: true })} id="schoolSubject">
                <option value="" disabled selected>Selecione qual você quer ensinar</option>
                {schoolSubjects.map(({ schoolSubject, value }) => (
                  <option key={value} value={value}>{schoolSubject}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup
              title="Custo da sua hora por aula"
              subtitle="em R$"
              name="price"
            >
              <input
                type="number"
                {...register('price', {
                  required: true,
                  valueAsNumber: true,
                })}
                id="price"
              />
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
                <select {...register('weekday', { required: true })} id="weekday">
                  <option value="" disabled selected>Selecione o dia</option>
                  {weekdays.map(({ weekday, value }) => (
                    <option key={value} value={value}>{weekday}</option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup
                title="Das"
                name="hoursFrom"
              >
                <input
                  type="number"
                  {...register('hoursFrom', {
                    required: true,
                    min: 0,
                    max: 24,
                    valueAsNumber: true,
                  })}
                  id="hoursFrom"
                />
              </FormGroup>

              <FormGroup
                title="Até"
                name="hoursTo"
              >
                <input
                  type="number"
                  {...register('hoursTo', {
                    required: true,
                    min: 0,
                    max: 24,
                    valueAsNumber: true,
                  })}
                  id="hoursTo"
                />
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
