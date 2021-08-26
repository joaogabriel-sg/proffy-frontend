import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 2.4rem;
  }

  label {
    span {
      display: flex;
      align-items: center;

      font-size: 1.4rem;
      color: var(--color-text-complement);

      > small {
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
`;
