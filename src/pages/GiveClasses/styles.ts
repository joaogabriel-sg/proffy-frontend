import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const Container = styled.main`
  background: var(--color-background);
  min-height: 100%;
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
  & + & {
    margin-top: 6.4rem;
  }

  div + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 1.6rem;

    & + & {
      margin-top: 2.4rem;
    }

    div + div {
      margin-top: 0 !important;
    }
  }
`;

export const PlusIcon = styled.img`
  margin-right: 1.2rem;
`;

export const DeleteButton = styled.button`
  background: var(--color-danger);
  width: 100%;
  height: min(5.6rem, 10vw);

  padding: 0 1.2rem;
  border: none;
  border-radius: 8px;
  margin-top: 2.4rem;

  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-button-text);

  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--color-danger-dark);
  }

  @media (min-width: 700px) {
    background: transparent;
    color: var(--color-danger);
    transition: color 0.2s ease-in-out;

    &:hover {
      background: transparent;
      color: var(--color-danger-dark);
    }
  }
`;

const footerVariants: Variants = {
  hidden: {
    y: 150,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const Footer = styled(motion.footer).attrs(() => ({
  variants: footerVariants,
}))`
  background: var(--color-box-footer);
  padding: 4.8rem 2.4rem;
  border-top: 1px solid var(--color-line-in-white);

  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 700px) {
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
