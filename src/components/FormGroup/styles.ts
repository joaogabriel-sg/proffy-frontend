import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 2.4rem;
  }

  label {
    span {
      display: flex;
      align-items: center;
      margin-bottom: 0.8rem;

      font-size: 1.4rem;
      color: var(--color-text-complement);

      > small {
        margin-left: 1.2rem;
        font-size: 1.2rem;
        opacity: 0.5;
      }
    }
  }
`;

export const ErrorMessage = styled.small`
  font-size: 1.2rem;
  color: var(--color-text-complement);
`;
