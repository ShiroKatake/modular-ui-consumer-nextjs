import Link from 'next/link';
import React from 'react';
import { LogoHamburgerWrapper, LogoSVG, StyledHamburgerButton } from './NavHome.styled';

interface McNavHomeProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (val: boolean) => void;
}

export const NavHome: React.FC<McNavHomeProps> = ({ isNavExpanded, setIsNavExpanded }) => {
  return (
    <LogoHamburgerWrapper>
      <Link href="https://conversations.movember.com/en-us/">
        <LogoSVG />
      </Link>
      <StyledHamburgerButton
        isNavExpanded={isNavExpanded}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburgerButton>
    </LogoHamburgerWrapper>
  );
}