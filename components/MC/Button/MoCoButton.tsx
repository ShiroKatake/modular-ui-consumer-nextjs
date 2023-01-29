import React from 'react';
import { ButtonProps, StyledMoCoButton } from './MoCoButton.styled';

interface Props extends ButtonProps {
  children: string;
}

export const MoCoButton: React.FC<Props> = ({ children, primary }) => {
  return (
    <StyledMoCoButton primary={primary}>{children}</StyledMoCoButton>
  );
}
