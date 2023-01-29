import React from "react";
import { FmButtonProps, StyledFmButton } from "./FmButton.styled";
import { ButtonProps } from "modular-ui/Button";

export const FmButton: React.FC<ButtonProps & FmButtonProps> = ({ children, primary }) => {
  return (
    <StyledFmButton primary={primary}>{children}</StyledFmButton>
  );
}
