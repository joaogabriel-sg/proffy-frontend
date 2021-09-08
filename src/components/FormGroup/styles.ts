import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.25,
      type: 'spring',
      bounce: 0.6,
    },
  },
};

export const Container = styled(motion.div).attrs(() => ({
  variants: containerVariants,
}))`
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
