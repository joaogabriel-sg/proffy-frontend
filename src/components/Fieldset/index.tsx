import { PropsWithChildren, ReactNode } from 'react';
import { Container } from './styles';

type FieldsetProps = {
  legend: string | ReactNode;
} & PropsWithChildren<ReactNode>;

export function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <Container>
      <legend>{legend}</legend>
      {children}
    </Container>
  );
}
