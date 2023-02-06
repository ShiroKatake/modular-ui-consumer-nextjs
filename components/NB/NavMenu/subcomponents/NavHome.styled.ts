import styled, { css } from "styled-components";
import { Button } from "modular-ui/Button";
import MocoLogo from "../assets/nb_logo.svg";

type NavToggleable = {
  isNavExpanded: boolean;
}

export const LogoHamburgerWrapper = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 8px 16px;
    width: calc(100% - 32px);
  }
`;

export const StyledHamburgerButton = styled(Button) <NavToggleable>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  box-sizing: content-box;
  width: 40px;
  height: 40px;

  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: block;
    border-bottom: 2px solid black;
    width: 18px;
    transition: transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1) 0s, opacity 0.4s cubic-bezier(0.77, 0.2, 0.05, 1) 0s;
  }

  span:not(:first-child) {
    padding-bottom: 4px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }

  ${({ isNavExpanded }) => {
    if (isNavExpanded) {
      return css`
        span:nth-child(1) {
          transform: translate(1px, 5.5px) rotate(45deg);
          transform-origin: center;
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translate(-0.5px, -5.5px) rotate(-45deg);
          transform-origin: center;
        }
      `;
    }
  }}
`;

export const LogoSVG = styled(MocoLogo)`
  width: 150px;
  @media screen and (max-width: 1024px) {
    width: 62px;
  }
`;