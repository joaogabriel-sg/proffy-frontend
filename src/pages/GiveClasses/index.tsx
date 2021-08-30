import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Header } from '../../components/Header';
import { ThumbTexts } from '../../components/ThumbTexts';
import { Wrapper } from '../../components/Wrapper';
import { Fieldset } from '../../components/Fieldset';
import { FormGroup } from '../../components/FormGroup';
import { Button } from '../../components/Button';

import plusIcon from '../../assets/plus-symbol.svg';
import warningIcon from '../../assets/warning.svg';

import { schoolSubjects } from '../../helpers/schoolSubjects';
import { weekdays } from '../../helpers/weekdays';
import { newProffySchema } from '../../schemas/newProffySchema';

import {
  Container,
  Form,
  PlusIcon,
  Row,
  Footer,
  Warning,
  WarningIcon,
} from './styles';

type NewProffySchemaType = z.infer<typeof newProffySchema>

export function GiveClasses() {
  const {
    register, control, handleSubmit, formState: { errors },
  } = useForm<NewProffySchemaType>({
    resolver: zodResolver(newProffySchema),
    defaultValues: {
      classes: [{ weekday: 'monday', hoursFrom: 0, hoursTo: 0 }],
    },
  });

  const { fields, append } = useFieldArray({
    name: 'classes',
    control,
  });

  const handleSubmitNewProffy: SubmitHandler<NewProffySchemaType> = (data) => {
    console.log(data);
  };

  function handleCreateNewHour() {
    append({ weekday: 'monday', hoursFrom: 0, hoursTo: 0 });
  }

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
                <button type="button" onClick={handleCreateNewHour}>
                  <PlusIcon src={plusIcon} />
                  Novo horário
                </button>
              </>
            )}
          >
            {fields.map((field, index) => (
              <Row key={field.id}>
                <FormGroup title="Dia da semana" name="weekday">
                  <select {...register(`classes.${index}.weekday`)} id="weekday">
                    {weekdays.map(({ weekday, value }) => (
                      <option key={value} value={value}>{weekday}</option>
                    ))}
                  </select>
                </FormGroup>

                <FormGroup title="Das" name="hoursFrom">
                  <input
                    type="number"
                    {...register(`classes.${index}.hoursFrom`, { valueAsNumber: true })}
                    id="hoursFrom"
                    defaultValue={0}
                  />
                </FormGroup>

                <FormGroup title="Até" name="hoursTo">
                  <input
                    type="number"
                    {...register(`classes.${index}.hoursTo`, { valueAsNumber: true })}
                    id="hoursTo"
                    defaultValue={0}
                  />
                </FormGroup>
              </Row>
            ))}
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
