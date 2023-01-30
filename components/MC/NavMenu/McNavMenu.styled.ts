import styled from "styled-components";
import { Button } from "modular-ui/Button";
import { NavMenu } from "modular-ui/NavMenu";
import { NavUl, NavLi, NavA } from "modular-ui/NavMenu/NavMenu.styled";
import MocoLogo from "./assets/mc_logo.svg";
import MocoChevron from "./assets/mc_chevron.svg";
import MocoLanguage from "./assets/mc_language.svg";

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

export const StyledLogo = styled(MocoLogo)`
  width: 178px;
`;

export const StyledChevron = styled(MocoChevron)`
  min-width: 18px;
  padding-bottom: 5px;
`;

export const StyledLanguage = styled(MocoLanguage)`
  min-width: 18px;
  padding-bottom: 5px;
`;

export const StyledNavMenu = styled(NavMenu)`
  display: flex;
  align-items: center;
  background-color: #f7cb46;
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 56px;

  ${NavUl} {
    display: flex;
    margin: 0 auto;
  }

  ${NavLi} {
    padding: 0 16px;
  }

  ${NavLi}:nth-child(2) {
    border-right: 2px solid black;
  }

  ${NavA} {
    color: inherit;
    text-decoration: none;
  }

  ${NavA}:hover {
    text-decoration: underline;
  }
`;

export const StyledLanguageButton = styled(Button)`
  display: flex;
  gap: 6px;
  border: none;
  background: none;
  fill: black;
  cursor: pointer;

  span {
    font-size: 1.1rem;
    font-family: "Overpass";
    font-weight: 600;
  }
`;

