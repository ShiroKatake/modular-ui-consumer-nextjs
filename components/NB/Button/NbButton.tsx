import React from "react";
import { StyledNbButton } from "./NbButton.styled";
import { ButtonProps } from "modular-ui/Button";

export const NbButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledNbButton>{children}</StyledNbButton>
  );
}
