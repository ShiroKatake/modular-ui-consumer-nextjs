import React from 'react';
import { StyledNbButton } from './NbButton.styled';

interface Props {
  children: string;
}

export const NbButton: React.FC<Props> = ({ children }) => {
  return (
    <StyledNbButton>{children}</StyledNbButton>
  );
}
