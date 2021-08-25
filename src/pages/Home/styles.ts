import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  background: var(--color-primary);
  min-height: 100%;
  padding: 4.8rem 4rem 2rem;

  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 850px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  color: var(--color-title-in-primary);

  div {
    > span {
      font-size: 2rem;
    }

    > h2 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  @media (min-width: 850px) {
    flex-direction: row-reverse;
    align-items: center;

    > div {
      width: 100%;

      > h2 {
        width: 20rem;
        margin-top: 1.2rem;
        color: var(--color-text-in-primary);
      }
    }
  }
`;

export const LandingImg = styled.img`
  width: 100%;
  margin-bottom: 8rem;

  @media (min-width: 850px) {
    flex-shrink: 1;
    max-width: min(70rem, 60vw);
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  width: max(20rem, 30vw);

  @media (min-width: 850px) {
    max-width: 32rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(Link)`
  flex: 1;
  min-height: 15.8rem;

  padding: 2.4rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-decoration: none;
  transition: background 0.2s;

  > span {
    font-family: 'Archivo', Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    color: var(--color-title-in-primary);
  }

  & + & {
    margin-left: 1.6rem;
  }

  @media (min-width: 750px) {
    min-width: 16rem;
  }

  &:nth-child(1) {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-dark);
    }
  }

  &:nth-child(2) {
    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }
  }

  @media (min-width: 850px) {
    min-height: auto;
    width: 24rem;
    height: 11.2rem;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    > span {
      margin-left: 1.2rem;
    }
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const Description = styled.p`
  width: 18rem;
  margin-top: 4rem;

  font-size: 1.6rem;
  color: var(--color-text-in-primary);

  @media (min-width: 750px) {
    width: auto;
    margin-top: 0;
    margin-left: 2.4rem;
    text-align: right;
  }
`;

export const PurpleHeartIcon = styled.img`
  margin-left: 0.8rem;
`;
