import styled from 'styled-components';

export const Container = styled.main`
  background: var(--color-background);
  min-height: 100%;
`;

export const Filters = styled.section`
  background: var(--color-primary);
  padding: 0 0.8rem 12rem;
  margin-top: -9.2rem;

  > div {
    display: flex;
    flex-direction: column;

    > div {
      width: 100%;

      + div {
        margin-top: 0.8rem;
      }

      span {
        margin-bottom: 0.4rem;
        color: var(--color-text-in-primary);
      }

      select {
        background: var(--color-box-footer);
        width: 100%;
        height: min(5.6rem, 10vw);

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
    }
  }

  @media (min-width: 650px) {
    padding-bottom: 0;
    margin-bottom: 14.4rem;

    > div {
      flex-direction: row;
      max-width: 73.6rem;
      margin: 0 auto;
      transform:  translateY(3.6rem);

      > div {
        + div {
          margin-top: 0;
          margin-left: 1.6rem;
        }
      }
    }
  }
`;

export const Proffys = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    max-width: 73.6rem;
    margin: 0 auto;
  }
`;
