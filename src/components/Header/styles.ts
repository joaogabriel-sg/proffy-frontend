import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: var(--color-primary);
  width: 100%;
  padding: 1.2rem 0.8rem;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    max-width: 112rem;
    margin: 0 auto;
  }
`;

export const BackButton = styled(Link)``;

export const Logo = styled.img``;
