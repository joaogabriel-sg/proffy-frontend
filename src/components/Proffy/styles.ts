import styled from 'styled-components';

export const Container = styled.article`
  background: var(--color-box-base);
  border-radius: 8px;
  overflow: hidden;

  & + & {
    margin-top: 2.4rem;

    @media (min-width: 650px) {
      margin-top: 3.2rem;
    }
  }

  > div {
    padding: 2.4rem;

    @media (min-width: 650px) {
      padding: 3.2rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;

  @media (min-width: 650px) {
    margin-bottom: 3.2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 2.4rem;

    @media (min-width: 650px) {
      margin-left: 3.2rem;
    }

    > h3 {
      margin-bottom: 0.4rem;

      font-family: 'Archivo', Arial, Helvetica, sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
      color: var(--color-text-title);
    }

    > span {
      font-size: 1.6rem;
      color: var(--color-text-base);
    }
  }
`;

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

export const Bio = styled.p`
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: var(--color-text-base);

  @media (min-width: 650px) {
    font-size: 16px;
  }
`;

export const Footer = styled.footer`
  background: var(--color-box-footer);
  padding: 2.4rem;
  border-top: 1px solid var(--color-line-in-white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 650px) {
    padding: 3.2rem;
  }

  > span {
    font-size: 1.2rem;
    color: var(--color-text-complement);

    > strong {
      margin-left: 0.8rem;
      font-size: 1.6rem;
      color: var(--color-primary);
    }

    @media (min-width: 650px) {
      font-size: 1.4rem;

      > strong {
        margin-left: 1.6rem;
        font-size: 2rem;
      }
    }
  }
`;
