import React from "react";
import { StyledButton } from "./AotgButton.styled";

interface Props {
  children: React.ReactNode;
}

export const AotgButton: React.FC<Props> = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}
