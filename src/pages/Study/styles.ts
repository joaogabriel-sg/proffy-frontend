import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.main`
  background: var(--color-background);
  min-height: 100%;
`;

const filtersVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const Filters = styled(motion.section).attrs(() => ({
  variants: filtersVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  background: var(--color-primary);
  padding: 0 0.8rem 12rem;
  margin-top: -9.2rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 650px) {
    padding-bottom: 0;
    margin-bottom: 14.4rem;

    > div {
      flex-direction: row;
      max-width: 73.6rem;
      margin: 0 auto;
      transform: translateY(3.6rem);
    }
  }
`;

const filterVariants: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      type: 'spring',
      bounce: 0.75,
    },
  },
};

export const Filter = styled(motion.div).attrs(() => ({
  variants: filterVariants,
}))`
  width: 100%;

  & + & {
    margin-top: 0.8rem;
  }

  > span {
    margin-bottom: 0.4rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 650px) {
    & + & {
      margin-top: 0;
      margin-left: 1.6rem;
    }
  }
`;

const proffysVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.65,
      staggerChildren: 0.5,
    },
  },
};

export const Proffys = styled(motion.section).attrs(() => ({
  variants: proffysVariants,
}))`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    max-width: 73.6rem;
    margin: 0 auto;
  }
`;

export const Empty = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: min(2.4rem, 5vw);
    color: var(--color-title-in-primary);
  }

  > img {
    max-width: 40rem;
    align-self: center;
  }

  @media (min-width: 650px) {
    > h2 {
      margin-bottom: 1.2rem;
      color: var(--color-primary);
    }
  }
`;
