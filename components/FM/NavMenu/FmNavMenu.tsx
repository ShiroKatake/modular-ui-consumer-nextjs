import Link from "next/link";
import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import {
  StyledFirstEpisodeLink,
  StyledLogo,
  StyledHamburger,
  StyledCross,
  StyledNavMenu,
  LogoHamburgerWrapper,
  StyledHamburgerButton,
} from "./FmNavMenu.styled";

const navLinks = [
  {
    href: "https://familyman.movember.com/en-us/dashboard",
    text: "Watch Episodes"
  },
  {
    href: "https://familyman.movember.com/en-us/articles",
    text: "Read Articles"
  },
  {
    href: "https://familyman.movember.com/en-us/phone-register",
    text: "Get Text Messages"
  },
  {
    href: "https://familyman.movember.com/en-us/research",
    text: "Research"
  },
  {
    href: "https://familyman.movember.com/en-us/about",
    text: "About",
  },
  {
    sublinks: [
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Log in",
      },
      {
        href: "https://familyman.movember.com/en-us/register",
        text: "Sign up",
      }
    ]
  },
];

export const FmNavMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderHomeBar = () => {
    return (
      <LogoHamburgerWrapper>
        <Link href="https://familyman.movember.com/en-us">
          <StyledLogo />
        </Link>
        <StyledHamburgerButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <StyledCross /> : <StyledHamburger />}
        </StyledHamburgerButton>
      </LogoHamburgerWrapper>
    );
  }

  const renderFirstEpisodeLink = () => {
    return (
      <StyledFirstEpisodeLink
        isExpanded={isExpanded}
        as={"a"}
        href="https://familyman.movember.com/en-us/episode/its-quiet-too-quiet"
      >
        <IoMdPlay /> Watch Episode 1
      </StyledFirstEpisodeLink>
    );
  }

  return (
    <StyledNavMenu
      childrenBefore={renderHomeBar()}
      navLinks={navLinks}
      childrenAfter={renderFirstEpisodeLink()}
      isExpanded={isExpanded}
    />
  );
};
