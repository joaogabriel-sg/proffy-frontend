import { z } from 'zod';

export const newProffySchema = z.object({
  name: z
    .string()
    .nonempty({
      message: 'Seu nome completo é fundamental em nossa plataforma.',
    }),
  avatar: z
    .string()
    .nonempty({
      message: 'Coloque o link da sua foto para que os alunos o conheçam.',
    })
    .url({
      message:
        'O link da imagem é inválido, tente utilizar um link como http://meusite.com/minha-imagem.jpg',
    }),
  whatsapp: z
    .string()
    .nonempty({
      message:
        'O WhatsApp é um excelente meio para acolher possíveis alunos, lembre-se de preencher.',
    }),
  bio: z
    .string()
    .nonempty({
      message:
        'Invista bastante numa boa biografia para atrair a atenção dos alunos.',
    }),
  schoolSubject: z
    .string()
    .nonempty({
      message:
        'Eita, parece que você esqueceu de escolher a matéria que lecionará.',
    }),
  price: z
    .number()
    .positive({ message: 'Não se esqueça do preço da sua hora de aula.' }),
  classes: z
    .object({
      weekday: z
        .string()
        .nonempty({ message: 'Parece que você não selecionou o dia da aula.' }),
      hoursFrom: z
        .number()
        .nonnegative({
          message: 'A hora está errada, use horários entre 0 e 23.',
        })
        .min(0)
        .max(23, { message: 'Um momento, a hora máxima é 23h.' })
        .int({
          message: 'Infelizmente não é possível usar números "quebrados".',
        }),
      hoursTo: z
        .number()
        .nonnegative({
          message: 'A hora está errada, use horários entre 0 e 23.',
        })
        .min(0)
        .max(23, { message: 'Um momento, a hora máxima é 23h.' })
        .int({
          message: 'Infelizmente não é possível usar números "quebrados".',
        }),
    })
    .array(),
});
