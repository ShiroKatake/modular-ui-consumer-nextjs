import styled, { css } from "styled-components";
import { Button } from "modular-ui/Button";
import { NavMenu } from "modular-ui/NavMenu";
import { NavUl, NavLi, NavA } from "modular-ui/NavMenu/NavMenu.styled";
import MocoLogo from "./assets/mc_logo.svg";
import MocoChevron from "./assets/mc_chevron.svg";
import MocoLanguage from "./assets/mc_language.svg";
import { StyledFooter } from "../Footer/Footer.styled";

type NavToggleable = {
  isNavExpanded: boolean;
}

type LanguageToggleable = {
  isLanguageExpanded: boolean;
}

export const ChevronIcon = styled(MocoChevron)`
  min-width: 18px;
  padding-bottom: 5px;
`;

export const LanguageIcon = styled(MocoLanguage)`
  min-width: 18px;
  padding-bottom: 5px;
`;

export const NavLinkDescription = styled.span`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const LanguageContainer = styled.div`
  position: relative;
  
  @media screen and (max-width: 1024px) {
    margin-right: 16px;
  }
`;

export const LanguageButton = styled(Button)`
  display: flex;
  gap: 6px;
  border: none;
  background: none;
  fill: black;
  cursor: pointer;

  font-size: 1.1rem;
  font-family: "Overpass";
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const LanguageList = styled.ul<LanguageToggleable>`
  display: ${({ isLanguageExpanded }) => isLanguageExpanded ? "block" : "none"};
  position: absolute;
  right: 0;
  padding: 0;
  list-style-type: none;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    bottom: 30px;
  }
`;

export const LanguageListItem = styled.li`
  min-width: max-content;
  padding: 14px 59px;
  border: 1px solid white;

  background-color: white;
  color: black;
  font-size: 14px;
  text-align: center;

  cursor: pointer;

  &:hover {
    border: 1px solid hsl(233, 100%, 60%);
  }

  &:nth-child(2) {
    border: 1px solid hsl(233, 100%, 60%);
    background-color: hsl(233, 100%, 60%);
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 1024px) {
    padding: 19px 150px 19px 19px;
    text-align: left;
    background-color: black;
    border: 1px solid black;
    color: white;

    &:hover {
      background-color: hsl(233, 100%, 60%);
    } 
  }
`;

export const StyledNavMenu = styled(NavMenu) <NavToggleable>`
  display: flex;
  align-items: center;

  padding: 12px 56px;
  background-color: #f7cb46;

  color: black;
  font-size: 18px;
  font-weight: 600;

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

    span {
      padding-top: 10px;
      font-size: 12px;
      font-weight: 400;
      color: rgb(115, 115, 115);
    }
  }

  ${NavA}:hover {
    text-decoration: underline;
  }

  ${StyledFooter} {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    background-color: #f7cb46;

    ${({ isNavExpanded }) => isNavExpanded && css`
      position: absolute;
      height: 100vh;
      width: 100vw;
      background-color: white;
    `};

    ${NavUl} {
      display: ${({ isNavExpanded }) => isNavExpanded ? "flex" : "none"};
      flex-direction: column;
      margin: 0 0 auto 0;
      padding: 24px 20px 30px 20px;
    }

    ${NavLi} {
      padding: 14px 0;
    }

    ${NavLi}:nth-child(2) {
      border: none;
    }

    ${LanguageContainer} {
      align-self: flex-end;
    }

    ${LanguageButton} {
      display: ${({ isNavExpanded }) => isNavExpanded ? "flex" : "none"};
    }

    ${StyledFooter} {
      display: ${({ isNavExpanded }) => isNavExpanded ? "block" : "none"};
      margin-top: auto;
    }
  }
`;
