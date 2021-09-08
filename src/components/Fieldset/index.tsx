import { PropsWithChildren, ReactNode } from 'react';

import { Container, Legend } from './styles';

type FieldsetProps = {
  legend: string | ReactNode;
} & PropsWithChildren<ReactNode>;

export function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <Container>
      <Legend>{legend}</Legend>
      {children}
    </Container>
  );
}
