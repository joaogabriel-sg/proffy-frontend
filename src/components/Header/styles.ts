import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

export const Container = styled.header`
  background: var(--color-primary);
  width: 100%;
  padding: 1.2rem 0.8rem;
`;

const contentVariants: Variants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.25,
      type: 'spring',
      bounce: 0.6,
    },
  },
};

export const Content = styled(motion.div).attrs(() => ({
  variants: contentVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  width: 100%;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    max-width: 112rem;
    margin: 0 auto;
  }
`;

export const BackButton = styled(Link)``;

export const Logo = styled.img``;
