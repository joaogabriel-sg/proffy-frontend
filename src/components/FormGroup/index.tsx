import { PropsWithChildren, ReactNode } from 'react';
import { Container } from './styles';

type FormGroupType = {
  title: string;
  subtitle?: string;
  name: string;
} & PropsWithChildren<ReactNode>

export function FormGroup({
  title, subtitle, name, children,
}: FormGroupType) {
  return (
    <Container>
      <label htmlFor={name}>
        <span>
          {title}
          {subtitle && <small>{`(${subtitle})`}</small>}
        </span>
        {children}
      </label>
    </Container>
  );
}
