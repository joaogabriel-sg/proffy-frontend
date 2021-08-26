import styled from 'styled-components';

export const Container = styled.fieldset`
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
