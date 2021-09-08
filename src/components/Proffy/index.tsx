import { Button } from '../Button';

import { currencyFormat } from '../../utils/currencyFormat';
import { getSchoolSubject } from '../../utils/getSchoolSubject';

import whatsappLogoImg from '../../assets/whatsapp.svg';

import { Container, Header, Avatar, Bio, Footer } from './styles';

type ProffyProps = {
  name: string;
  schoolSubject: string;
  avatar: string;
  bio: string;
  price: number;
  whatsapp: string;
};

export function Proffy({
  name,
  schoolSubject,
  avatar,
  bio,
  price,
  whatsapp,
}: ProffyProps) {
  const subject = getSchoolSubject(schoolSubject);
  const message = `Olá professor(a) ${name}, gostaria de saber mais sobre suas aulas de ${subject}.`;

  return (
    <Container>
      <div>
        <Header>
          <Avatar src={avatar} />
          <div>
            <h3>{name}</h3>
            <span>{subject}</span>
          </div>
        </Header>
        <Bio>{bio}</Bio>
      </div>
      <Footer>
        <span>
          Preço/hora
          <strong>{currencyFormat(price)}</strong>
        </span>
        <Button
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
            whatsapp,
          )}&text=${encodeURIComponent(message)}`}
        >
          <img src={whatsappLogoImg} alt={whatsapp} />
          Entrar em contato
        </Button>
      </Footer>
    </Container>
  );
}
