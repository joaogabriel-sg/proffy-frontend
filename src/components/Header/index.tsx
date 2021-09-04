import backIcon from '../../assets/back.svg';
import logoIcon from '../../assets/logo-small.svg';

import { Container, Content, Menu, BackButton, Logo } from './styles';

type HeaderProps = {
  backTo?: string;
};

export function Header({ backTo = '/' }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Menu>
          <BackButton to={backTo}>
            <img src={backIcon} alt="Voltar" />
          </BackButton>
          <Logo src={logoIcon} />
        </Menu>
      </Content>
    </Container>
  );
}
