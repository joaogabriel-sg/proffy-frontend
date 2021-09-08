import { Container, Content, Title, Description } from './styles';

type ThumbTextsProps = {
  title: string;
  description?: string;
};

export function ThumbTexts({ title, description }: ThumbTextsProps) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
    </Container>
  );
}
