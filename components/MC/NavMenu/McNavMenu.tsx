import Link from "next/link";
import React from "react";
import { LogoHamburgerWrapper, StyledChevron, StyledLanguage, StyledLogo, StyledLanguageButton, StyledNavMenu } from "./McNavMenu.styled";

const navLinks = [
  {
    href: "https://conversations.movember.com/en-us/conversations/",
    text: "Practice Conversations"
  },
  {
    href: "https://conversations.movember.com/en-us/ALEC/",
    text: "Learn The Basics"
  },
  {
    href: "https://conversations.movember.com/en-us/resources/",
    text: "Articles & Resources"
  },
  {
    href: "https://conversations.movember.com/en-us/about/",
    text: "About Us"
  },
  {
    href: "https://au.movember.com/mens-health/get-support",
    text: "Get Support",
  }
];

export const McNavMenu: React.FC = () => {

  const renderHomeBar = () => {
    return (
      <LogoHamburgerWrapper>
        <Link href="https://conversations.movember.com/en-us/">
          <StyledLogo />
        </Link>
        {/* <StyledHamburgerButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <StyledCross /> : <StyledHamburger />}
        </StyledHamburgerButton> */}
      </LogoHamburgerWrapper>
    );
  }

  const renderLanguageDropdown = () => {
    return (
      <StyledLanguageButton>
        <StyledLanguage />
        <span>Language</span>
        <StyledChevron />
      </StyledLanguageButton>
    )
  }

  return (
    <StyledNavMenu
      childrenBefore={renderHomeBar()}
      navLinks={navLinks}
      childrenAfter={renderLanguageDropdown()}
    />
  );
}
