import styled from 'styled-components';

export const Container = styled.main`
  background: var(--color-background);
  min-height: 100%;
`;

export const Wrapper = styled.div`
  padding: 0 0.8rem 2rem;
  margin-top: -6.4rem;
`;

export const Form = styled.form`
  background: var(--color-box-base);
  padding-top: 4.8rem;
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 700px) {
    max-width: 73.6rem;
    padding-top: 6.4rem;
    margin: 0 auto;
  }
`;

export const Row = styled.div`
  div + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 1.6rem;

    div + div {
      margin-top: 0 !important;
    }
  }
`;

export const PlusIcon = styled.img`
  margin-right: 1.2rem;
`;

export const Footer = styled.footer`
  background: var(--color-box-footer);
  padding: 4.8rem 2.4rem;

  display: flex;
  flex-direction: column-reverse;

  @media(min-width: 700px) {
    padding: 4rem 6.4rem;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Warning = styled.div`
  margin-top: 1.6rem;

  display: flex;
  align-items: center;

  > div {
    margin-left: 1.6rem;
    display: flex;
    flex-direction: column;

    > span {
      font-size: 1.2rem;
      color: var(--color-text-complement);
    }
  }
`;

export const WarningIcon = styled.img``;

export const Button = styled.button`
  background: var(--color-secondary);
  height: 5.6rem;
  border: none;
  border-radius: 8px;

  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-button-text);

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--color-secondary-dark);
  }

  @media(min-width: 700px) {
    min-width: 20rem;
    padding: 0 0.4rem;
  }
`;
