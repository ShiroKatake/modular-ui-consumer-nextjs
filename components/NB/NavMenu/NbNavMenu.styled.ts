import styled from "styled-components";
import { Button } from "modular-ui/Button";
import { NavMenu } from "modular-ui/NavMenu";
import { NavUl, NavLi, NavA, NestedNavUl, NestedNavLi, NestedNavA } from "modular-ui/NavMenu/NavMenu.styled";
import NbNutDark from "./assets/nb_nut.svg";
import NbNutLight from "./assets/nb_nut_light.svg";

type Toggleable = {
  isExpanded: boolean;
}

export const NutLogoDark = styled(NbNutDark)`
  opacity: 0;
  position: absolute;
  left: calc(50% - 3px);
  width: 12px;
  height: 6px;
`;

export const NutLogoLight = styled(NbNutLight)`
  opacity: 0;
  position: absolute;
  left: calc(50% - 3px);
  width: 12px;
  height: 6px;
`;

export const StyledNavMenu = styled(NavMenu) <Toggleable>`
  display: flex;
  justify-content: space-between;
  padding: 18px 24px;

  background-color: hsl(26, 27%, 88%);
  color: hsl(0, 0%, 9%);
  font-size: 12px;
  letter-spacing: 1px;

  ${NavUl} {
    display: flex;
    align-items: center;
    gap: 24px;
    font-weight: 700;
  }

  ${NestedNavUl} {
    display: none;
    /* background-color: black;
    position: absolute;
    left: 0;
    padding-left: 24px;
    gap: 24px;
    font-size: 16px;
    color: white;
    font-weight: 300;
    line-height: 24px; */
  }

  ${NestedNavLi} {
  }

  ${NestedNavA} {
    color: inherit;
    text-decoration: none;
  }

  ${NavA} {
    position: relative;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.7;
  }

  ${NavA}:hover {
    color: hsl(24, 99%, 48%);
    transition: all 0.2s ease 0s;

    ${NutLogoLight}, ${NutLogoDark} {
      opacity: 1;
      transform: translateY(16px);
      transition: opacity 0.4s ease 0s, transform 0.4s cubic-bezier(0.5, 3, 0.59, 0.23) 0s
    }
  }
`;