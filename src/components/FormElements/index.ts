import styled, { css } from 'styled-components';

const formElementsCSS = css`
  background: var(--color-box-footer);
  width: 100%;

  padding: 0.4rem 1.2rem;
  border: 1px solid var(--color-line-in-white);
  border-radius: 8px;
  outline: none;

  color: var(--color-text-base);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: var(--color-primary);
  }

  &::placeholder {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  ${formElementsCSS}
  height: min(5.6rem, 10vw);
`;

export const Select = styled.select`
  ${formElementsCSS}
  height: min(5.6rem, 10vw);
`;

export const Textarea = styled.textarea`
  ${formElementsCSS}
  min-height: 12rem;
  resize: vertical;

  @media (min-width: 700px) {
    min-height: 16.8rem;
  }
`;
