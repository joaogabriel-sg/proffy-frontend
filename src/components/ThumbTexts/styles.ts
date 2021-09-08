import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.section`
  background: var(--color-primary);
  padding: 4.8rem 0.8rem 12.8rem;
`;

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const Content = styled(motion.div).attrs(() => ({
  variants: contentVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  @media (min-width: 700px) {
    max-width: 73.6rem;
    margin: 0 auto;
  }
`;

const textsVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
    rotate: -5,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      type: 'spring',
      bounce: 0.7,
    },
  },
};

export const Title = styled(motion.h2).attrs(() => ({
  variants: textsVariants,
}))`
  width: min(40rem, 60vw);

  font-family: 'Archivo', Arial, Helvetica, sans-serif;
  font-size: min(3.6rem, 5vw);
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
`;

export const Description = styled(motion.p).attrs(() => ({
  variants: textsVariants,
}))`
  width: 30rem;
  margin-top: 2.4rem;

  font-size: min(1.6rem, 3vw);
  color: var(--color-text-in-primary);
`;
