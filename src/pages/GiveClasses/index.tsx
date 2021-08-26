import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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

const NewProffySchema = z.object({
  name: z.string().nonempty(),
  avatar: z.string().url().nonempty(),
  whatsapp: z.string().nonempty(),
  bio: z.string().nonempty(),
  schoolSubject: z.string().nonempty(),
  price: z.number().nonnegative(),
  weekday: z.string().nonempty(),
  hoursFrom: z.number().positive().min(0).max(23),
  hoursTo: z.number().positive().min(0).max(23),
});

type NewProffySchemaType = z.infer<typeof NewProffySchema>

export function GiveClasses() {
  const { register, handleSubmit } = useForm<NewProffySchemaType>({
    resolver: zodResolver(NewProffySchema),
  });

  const handleSubmitNewProffy: SubmitHandler<NewProffySchemaType> = (data) => {
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
            <FormGroup title="Nome completo" name="name">
              <input {...register('name')} id="name" />
            </FormGroup>

            <FormGroup title="Link da sua foto" subtitle="comece com http://" name="avatar">
              <input {...register('avatar')} id="avatar" />
            </FormGroup>

            <FormGroup title="WhatsApp" subtitle="somente números" name="whatsapp">
              <input {...register('whatsapp')} id="whatsapp" />
            </FormGroup>

            <FormGroup title="Biografia" name="bio">
              <textarea {...register('bio')} id="bio" />
            </FormGroup>
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <FormGroup title="Matéria" name="schoolSubject">
              <select {...register('schoolSubject')} id="schoolSubject">
                <option value="" disabled selected>Selecione qual você quer ensinar</option>
                {schoolSubjects.map(({ schoolSubject, value }) => (
                  <option key={value} value={value}>{schoolSubject}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup title="Custo da sua hora por aula" subtitle="em R$" name="price">
              <input type="number" {...register('price', { valueAsNumber: true })} id="price" />
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
              <FormGroup title="Dia da semana" name="weekday">
                <select {...register('weekday')} id="weekday">
                  <option value="" disabled selected>Selecione o dia</option>
                  {weekdays.map(({ weekday, value }) => (
                    <option key={value} value={value}>{weekday}</option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup title="Das" name="hoursFrom">
                <input type="number" {...register('hoursFrom', { valueAsNumber: true })} id="hoursFrom" />
              </FormGroup>

              <FormGroup title="Até" name="hoursTo">
                <input type="number" {...register('hoursTo', { valueAsNumber: true })} id="hoursTo" />
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

            <Button type="button">Salvar Cadastro</Button>
          </Footer>
        </Form>
      </Wrapper>
    </Container>
  );
}
