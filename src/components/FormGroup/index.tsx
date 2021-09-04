import { PropsWithChildren, ReactNode } from 'react';
import { Container, ErrorMessage } from './styles';

type FormGroupType = {
  title: string;
  subtitle?: string;
  name: string;
  errorMessage?: string;
} & PropsWithChildren<ReactNode>;

export function FormGroup({
  title,
  subtitle,
  name,
  errorMessage,
  children,
}: FormGroupType) {
  return (
    <Container>
      <label htmlFor={name}>
        <span>
          {title}
          {subtitle && <small>{`(${subtitle})`}</small>}
        </span>
        {children}
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </label>
    </Container>
  );
}
