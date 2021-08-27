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
  name: z.string().nonempty({ message: 'Seu nome completo é fundamental em nossa plataforma.' }),
  avatar: z
    .string()
    .nonempty({ message: 'Coloque o link da sua foto para que os alunos o conheçam.' })
    .url({ message: 'O link da imagem é inválido, tente utilizar um link como http://meusite.com/minha-imagem.jpg' }),
  whatsapp: z
    .string()
    .nonempty({ message: 'O WhatsApp é um excelente meio para acolher possíveis alunos, lembre-se de preencher.' }),
  bio: z
    .string()
    .nonempty({ message: 'Invista bastante numa boa biografia para atrair a atenção dos alunos.' }),
  schoolSubject: z
    .string()
    .nonempty({ message: 'Eita, parece que você esqueceu de escolher a matéria que lecionará.' }),
  price: z
    .number()
    .positive({ message: 'Não se esqueça do preço da sua hora de aula.' }),
  weekday: z.string().nonempty({ message: 'Parece que você não selecionou o dia da aula.' }),
  hoursFrom: z
    .number()
    .nonnegative({ message: 'A hora está errada, use horários entre 0 e 23.' })
    .min(0)
    .max(23, { message: 'Um momento, a hora máxima é 23h.' })
    .int({ message: 'Infelizmente não é possível usar números "quebrados".' }),
  hoursTo: z
    .number()
    .nonnegative({ message: 'A hora está errada, use horários entre 0 e 23.' })
    .min(0)
    .max(23, { message: 'Um momento, a hora máxima é 23h.' })
    .int({ message: 'Infelizmente não é possível usar números "quebrados".' }),
});

type NewProffySchemaType = z.infer<typeof NewProffySchema>

export function GiveClasses() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<NewProffySchemaType>({
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
            <FormGroup title="Nome completo" name="name" errorMessage={errors.name?.message}>
              <input {...register('name')} id="name" />
            </FormGroup>

            <FormGroup
              title="Link da sua foto"
              subtitle="comece com http://"
              name="avatar"
              errorMessage={errors.avatar?.message}
            >
              <input {...register('avatar')} id="avatar" />
            </FormGroup>

            <FormGroup
              title="WhatsApp"
              subtitle="somente números"
              name="whatsapp"
              errorMessage={errors.whatsapp?.message}
            >
              <input {...register('whatsapp', {})} id="whatsapp" />
            </FormGroup>

            <FormGroup title="Biografia" name="bio" errorMessage={errors.bio?.message}>
              <textarea {...register('bio')} id="bio" />
            </FormGroup>
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <FormGroup title="Matéria" name="schoolSubject" errorMessage={errors.schoolSubject?.message}>
              <select {...register('schoolSubject')} id="schoolSubject">
                {schoolSubjects.map(({ schoolSubject, value }) => (
                  <option key={value} value={value}>{schoolSubject}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup
              title="Custo da sua hora por aula"
              subtitle="em R$"
              name="price"
              errorMessage={errors.price?.message}
            >
              <input type="number" {...register('price', { valueAsNumber: true })} id="price" defaultValue={0} />
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
              <FormGroup title="Dia da semana" name="weekday" errorMessage={errors.weekday?.message}>
                <select {...register('weekday')} id="weekday">
                  {weekdays.map(({ weekday, value }) => (
                    <option key={value} value={value}>{weekday}</option>
                  ))}
                </select>
              </FormGroup>

              <FormGroup title="Das" name="hoursFrom" errorMessage={errors.hoursFrom?.message}>
                <input
                  type="number"
                  {...register('hoursFrom', { valueAsNumber: true })}
                  id="hoursFrom"
                  defaultValue={0}
                />
              </FormGroup>

              <FormGroup title="Até" name="hoursTo" errorMessage={errors.hoursTo?.message}>
                <input
                  type="number"
                  {...register('hoursTo', { valueAsNumber: true })}
                  id="hoursTo"
                  defaultValue={0}
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

            <Button type="submit">Salvar Cadastro</Button>
          </Footer>
        </Form>
      </Wrapper>
    </Container>
  );
}
