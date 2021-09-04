import { PropsWithChildren, ReactNode } from 'react';
import { Container } from './styles';

type WrapperProps = PropsWithChildren<ReactNode>;

export function Wrapper({ children }: WrapperProps) {
  return <Container>{children}</Container>;
}
