import styled from "styled-components";
import { Button } from "modular-ui/Button";
import AotgFist from "./assets/aotg_fist.svg";

export const StyledFist = styled(AotgFist)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 100px;
  padding: 19px;
  background-color: hsl(228, 81%, 47%);
  border: none;
  border-radius: 12%;
`;
