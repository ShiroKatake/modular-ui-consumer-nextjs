import React from "react";
import { NutLogoDark, NutLogoLight, StyledNavMenu } from "./NbNavMenu.styled";
import { NavHome } from "./subcomponents/NavHome";

type NavLink = {
  href: string;
  text: string | React.ReactNode;
  sublinks?: NavLink[];
}

type NavMenuLink = NavLink;

const navLinks: NavMenuLink[] = [
  {
    href: "https://familyman.movember.com/en-us/dashboard",
    text: "The journey",
    sublinks: [
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Lump, pain or swelling: How to check your testicles",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Seeing the doctor",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Testicular cancer tests",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Seeing the urologist",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Seeing the oncologist",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Testicular cancer surgery (orchiectomy)",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Recovering from testicular cancer surgery (orchiectomy)",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Active surveillance",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "If testicular cancer returns",
      },
      {
        href: "https://familyman.movember.com/en-us/login",
        text: "Chemotherapy, RPLND and radiation therapy for testicular cancer",
      },
    ]
  },
  {
    href: "https://familyman.movember.com/en-us/articles",
    text: "The facts"
  },
  {
    href: "https://familyman.movember.com/en-us/phone-register",
    text: "Sex & fertility"
  },
  {
    href: "https://familyman.movember.com/en-us/research",
    text: "Resources"
  },
  {
    href: "https://familyman.movember.com/en-us/about",
    text: "Talk to a guide",
  },
  {
    href: "https://familyman.movember.com/en-us/about",
    text: "Community Q&A",
  },
  {
    href: "https://familyman.movember.com/en-us/about",
    text: "About us",
  }
];

const transformNavLinks = (navLinks: NavMenuLink[]) => {
  const result: NavMenuLink[] = [];

  navLinks.map((navLink) => {
    const link: NavLink = {
      href: navLink.href,
      text: <>{navLink.text}<NutLogoLight /></>,
      sublinks: navLink.sublinks && navLink.sublinks
    }
    result.push(link);
  });

  return result;
}

export const NbNavMenu: React.FC = () => {
  return (
    <StyledNavMenu
      childrenBefore={<NavHome />}
      navLinks={transformNavLinks(navLinks)}
      isExpanded
    />
  );
}
