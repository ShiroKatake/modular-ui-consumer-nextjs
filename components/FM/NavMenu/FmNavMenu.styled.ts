import styled from "styled-components";
import { Button } from "modular-ui/Button";
import { NavMenu } from "modular-ui/NavMenu";
import { NavUl, NavLi, NavA, NestedNavUl, NestedNavLi, NestedNavA, resetStyle } from "modular-ui/NavMenu/NavMenu.styled";
import { StyledFmButton } from "../Button/FmButton.styled";
import FmLogo from "./assets/fm_logo.svg";
import FmHamburger from "./assets/fm_hamburger.svg";
import FmCross from "./assets/fm_cross.svg";

type Toggleable = {
  isExpanded: boolean;
}

export const LogoHamburgerWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const StyledLogo = styled(FmLogo)`
  width: 150px;
`;

export const StyledHamburgerButton = styled(Button)`
  background: none;
  border: none;
  cursor: pointer;
  fill: white;

  &:hover {
    fill: hsl(5, 75%, 64%);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledHamburger = styled(FmHamburger)`
  width: 24px;
  height: 24px;
`;

export const StyledCross = styled(FmCross)`
  width: 24px;
  height: 24px;
`;


export const StyledNavMenu = styled(NavMenu) <Toggleable>`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  padding: 10px 16px 10px 10.5px;

  background-color: hsla(227, 100%, 11%, 0.95);
  color: white;
  font-size: 1.725rem;

  ${({ isExpanded }) => isExpanded ? `height: 100vh` : `height: unset`};
  width: 100vw;

  ${NavUl} {
    ${resetStyle}
    ${({ isExpanded }) => isExpanded ? `display: flex` : `display: none`};
    align-items: center;
    gap: 30px;
    font-weight: bold;
    flex-direction: column;
    margin: 80px 0;
  }

  ${NestedNavUl} {
    ${resetStyle}
    display: flex;
  }

  ${NestedNavLi}:nth-child(1)::after {
    content: " /\\00a0";
    color: inherit;
  }

  ${NestedNavA} {
    color: inherit;
    text-decoration: none;
  }

  ${NavLi} {
    padding-bottom: 5px;
  }

  ${NavA} {
    color: inherit;
    text-decoration: none;
  }

  ${NavA}:hover, ${NestedNavA}:hover {
    color: hsl(5, 75%, 64%);
    transition: all 0.3s ease 0s;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
    flex-direction: row;
    justify-content: space-between;
    height: unset;
    width: unset;

    padding: 10px 30px;

    ${NavUl} {
      display: flex;
      flex-direction: row;
      margin: 0;
    }

    ${NestedNavA} {
      text-decoration: underline;
    }
  }
`;

export const StyledFirstEpisodeLink = styled(StyledFmButton) <Toggleable>`
  ${({ isExpanded }) => isExpanded ? `display: flex` : `display: none`};
  align-self: center;
  text-decoration: none;
  margin-bottom: auto;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
