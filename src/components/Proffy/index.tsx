import { Button } from '../Button';

import { currencyFormat } from '../../utils/currencyFormat';

import whatsappLogoImg from '../../assets/whatsapp.svg';

import {
  Container,
  Header,
  Avatar,
  Bio,
  Footer,
} from './styles';

type ProffyProps = {
  name: string;
  schoolSubject: string;
  avatar: string;
  bio: string;
  price: number;
  whatsapp: string;
}

export function Proffy({
  name, schoolSubject, avatar, bio, price, whatsapp,
}: ProffyProps) {
  return (
    <Container>
      <div>
        <Header>
          <Avatar src={avatar} />
          <div>
            <h3>{name}</h3>
            <span>{schoolSubject}</span>
          </div>
        </Header>
        <Bio>{bio}</Bio>
      </div>
      <Footer>
        <span>
          Preço/hora
          <strong>{currencyFormat(price)}</strong>
        </span>
        <Button type="button">
          <img src={whatsappLogoImg} alt={whatsapp} />
          Entrar em contato
        </Button>
      </Footer>
    </Container>
  );
}
