import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

export const Container = styled(motion.fieldset).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  border: none;
  padding: 0 2.4rem;
  margin-bottom: 4.8rem;

  @media (min-width: 700px) {
    padding: 0 6.4rem;
    margin-bottom: 6.4rem;
  }
`;

const legendVariants: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.75,
      type: 'spring',
      bounce: 0.6,
    },
  },
};

export const Legend = styled(motion.legend).attrs(() => ({
  variants: legendVariants,
}))`
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
`;
