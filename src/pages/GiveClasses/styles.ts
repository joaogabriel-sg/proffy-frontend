import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  background: var(--color-background);
  min-height: 100%;
`;

export const Header = styled.header`
  background: var(--color-primary);
  width: 100%;
  padding: 1.8rem 0.8rem 12.8rem;
`;

export const HeaderContent = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    > div:nth-child(1) {
      max-width: 112rem;
      margin: 0 auto;
    }

    > div:nth-child(2) {
      max-width: 73.6rem;
      margin: 0 auto;
    }
  }

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div:nth-child(2) {
    > h2 {
      width: min(40rem, 60vw);
      margin: 4.2rem 0 2.4rem;

      font-family: 'Archivo', Arial, Helvetica, sans-serif;
      font-size: min(3.6rem, 5vw);
      line-height: 4.2rem;
      color: var(--color-title-in-primary);
    }

    > p {
      width: 30rem;

      font-size: min(1.6rem, 3vw);
      color: var(--color-text-in-primary);
    }
  }
`;

export const ArrowBack = styled(Link)``;

export const Logo = styled.img``;

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

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0 2.4rem;
  margin-bottom: 4.8rem;

  @media (min-width: 700px) {
    padding: 0 6.4rem;
    margin-bottom: 6.4rem;
  }

  > legend {
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--color-line-in-white);
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    font-size: min(2.4rem, 4vw);
    font-weight: 600;
    color: var(--color-text-title);

    > button {
      background: none;
      border: none;
      margin-left: 0.6rem;

      font-family: 'Archivo', Arial, Helvetica, sans-serif;
      font-weight: 600;
      color: var(--color-primary);

      cursor: pointer;
    }
  }
`;

export const FormGroup = styled.div`
  & + & {
    margin-top: 2.4rem;
  }

  label {
    span {
      display: flex;
      align-items: center;

      font-size: 1.4rem;
      color: var(--color-text-complement);

      small {
        margin-left: 1.2rem;
        font-size: 1.2rem;
        opacity: 0.5;
      }
    }

    input,
    textarea,
    select {
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
    }

    input,
    select {
      height: min(5.6rem, 10vw);
    }

    textarea {
      min-height: 12rem;
      resize: vertical;

      @media (min-width: 700px) {
        min-height: 16.8rem;
      }
    }
  }

  &.available-times {
    > div + div {
      margin-top: 2.4rem;
    }

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 1.6rem;

      > div + div {
        margin-top: 0;
      }
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
