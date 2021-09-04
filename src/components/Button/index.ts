import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ButtonProps = {
  $isPrimary?: boolean;
  $isSecondary?: boolean;
};

const buttonCSS = css<ButtonProps>`
  background: var(--color-secondary);
  height: 5.6rem;
  padding: 0 1.2rem;
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: var(--color-button-text);

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--color-secondary-dark);
  }

  > img {
    margin-right: 0.8rem;
  }

  @media (min-width: 700px) {
    min-width: 24rem;
    padding: 0 0.6rem;

    > img {
      margin-right: 1.6rem;
    }
  }

  ${({ $isPrimary }) =>
    $isPrimary &&
    css`
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-dark);
      }
    `}

  ${({ $isSecondary }) =>
    $isSecondary &&
    css`
      background: var(--color-secondary);

      &:hover {
        background: var(--color-secondary-dark);
      }
    `}
`;

export const Button = styled.button<ButtonProps>`
  ${buttonCSS}
`;

export const LinkButton = styled(Link)<ButtonProps>`
  ${buttonCSS}
`;
