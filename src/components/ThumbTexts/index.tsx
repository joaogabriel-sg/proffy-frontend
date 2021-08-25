import { Container, Content } from './styles';

type ThumbTextsProps = {
  title: string;
  description?: string;
}

export function ThumbTexts({ title, description }: ThumbTextsProps) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </Content>
    </Container>
  );
}
