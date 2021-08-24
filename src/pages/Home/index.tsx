import logoImg from '../../assets/logo.svg';
import landingImg from '../../assets/landing.svg';
import giveClassesIcon from '../../assets/give-classes.svg';
import studyIcon from '../../assets/study.svg';
import purpleHeartIcon from '../../assets/purple-heart.svg';

import {
  Container,
  Content,
  Header,
  LandingImg,
  Logo,
  Footer,
  ButtonsContainer,
  Button,
  Icon,
  Description,
  PurpleHeartIcon,
} from './styles';

export function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <LandingImg src={landingImg} alt="Três pessoas conectadas ao Proffy." />
          <div>
            <Logo src={logoImg} alt="Proffy" />
            <h2>Sua plaforma de estudos online.</h2>
          </div>
        </Header>

        <Footer>
          <ButtonsContainer>
            <Button type="button">
              <Icon src={studyIcon} alt="Opção de estudar." />
              <span>Estudar</span>
            </Button>
            <Button type="button">
              <Icon src={giveClassesIcon} alt="Opção de dar aulas." />
              <span>Dar aulas</span>
            </Button>
          </ButtonsContainer>

          <Description>
            Total de 295 conexões já realizadas
            <PurpleHeartIcon src={purpleHeartIcon} alt="Coração roxo" />
          </Description>
        </Footer>
      </Content>
    </Container>
  );
}
