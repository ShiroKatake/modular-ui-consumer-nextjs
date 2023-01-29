import styled, { css } from 'styled-components';
import { StyledButton } from 'modular-ui/Button/Button.styled';

export interface ButtonProps {
  primary?: boolean;
}

const primaryStyles = css`
  padding: 0.7em 2em calc(0.7em + 1px) 2em;
  background-color: hsl(5, 75%, 64%);
  border: none;
  color: white;

  &:hover {
    background-color: hsl(5, 47%, 52%);
  }
`;

const secondaryStyles = css`
  padding: calc(0.7em - 1px) calc(2em - 1px) 0.7em calc(2em - 1px);
  background-color: hsla(0, 0%, 0%, 0);
  border: 1px hsl(5, 75%, 64%) solid;
  color:  hsl(5, 75%, 64%);

  &:hover {
    background-color: hsla(5, 47%, 52%, 0.3);
  }
`;

export const StyledFmButton = styled(StyledButton) <ButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  ${({ primary = true }) => primary ? primaryStyles : secondaryStyles}

  svg {
    margin-right: 0.5rem;
  }
`;
