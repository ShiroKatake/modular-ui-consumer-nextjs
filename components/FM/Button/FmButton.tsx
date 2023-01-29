import React from "react";
import { ButtonProps, StyledFmButton } from "./FmButton.styled";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const FmButton: React.FC<Props> = ({ children, primary }) => {
  return (
    <StyledFmButton primary={primary}>{children}</StyledFmButton>
  );
}
