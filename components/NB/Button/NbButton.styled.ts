import styled from 'styled-components';
import { StyledButton } from 'modular-ui/Button/Button.styled';

export const StyledNbButton = styled(StyledButton)`
  background-color: #f16222;
  border: none;
  padding: 0.5em 1.5em calc(0.5em + 1px) 1.5em;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #b23c08;
  }
`;
