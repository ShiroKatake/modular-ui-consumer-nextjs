import React from "react";
import { MoCoButtonProps, StyledMoCoButton } from "./MoCoButton.styled";
import { ButtonProps } from "modular-ui/Button";

export const MoCoButton: React.FC<ButtonProps & MoCoButtonProps> = ({ children, primary }) => {
  return (
    <StyledMoCoButton primary={primary}>{children}</StyledMoCoButton>
  );
}
