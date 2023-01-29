import styled, { css } from "styled-components";
import { StyledButton } from "modular-ui/Button/Button.styled";

export interface ButtonProps {
  primary?: boolean;
}

const primaryStyles = css`
  padding: 14px 24px 15px 24px;
  background-color: hsl(233, 100%, 60%);
  border: none;
  color: white;
`;

const secondaryStyles = css`
  padding: 13px 23px 14px 23px;
  background-color: hsla(0, 0%, 0%, 0);
  border: 1px hsl(233, 100%, 60%) solid;
  color:  hsl(233, 100%, 60%);
`;

export const StyledMoCoButton = styled(StyledButton) <ButtonProps>`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  ${({ primary = true }) => primary ? primaryStyles : secondaryStyles}

  svg {
    margin-right: 0.5rem;
  }
`;
