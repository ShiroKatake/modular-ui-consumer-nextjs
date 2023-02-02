import Link from "next/link";
import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import {
  ChevronIcon,
  LanguageIcon,
  LanguageButton,
  StyledNavMenu,
  LanguageList,
  LanguageListItem,
  LanguageContainer,
  NavLinkDescription,
} from "./McNavMenu.styled";
import { NavHome } from "./subcomponents/NavHome";

type NavLinks = {
  href: string;
  text: string;
  description?: string;
}

const navLinks: NavLinks[] = [
  {
    href: "https://conversations.movember.com/en-us/conversations/",
    text: "Practice Conversations",
    description: "Use your skills in practice conversations"
  },
  {
    href: "https://conversations.movember.com/en-us/ALEC/",
    text: "Learn The Basics",
    description: "Get familiar with basic skills & build your toolkit"
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

const languageList = [
  {
    href: "",
    text: "English"
  },
  {
    href: "",
    text: "English (AU)"
  },
  {
    href: "",
    text: "English (UK)"
  },
  {
    href: "",
    text: "English (CA)"
  },
  {
    href: "",
    text: "French (CA)",
  },
  {
    href: "",
    text: "French",
  },
  {
    href: "",
    text: "German",
  }
]

type NavLink = {
  href: string;
  text: React.ReactNode;
}

const transformNavLinks = (navLinks: NavLinks[]) => {
  const result: NavLink[] = [];

  navLinks.map((navLink) => {
    const link: NavLink = {
      href: navLink.href,
      text: <>{navLink.text}</>
    }

    if (navLink.description) {
      link.text =
        <>
          {navLink.text}
          <NavLinkDescription>{navLink.description}</NavLinkDescription>
        </>
    }

    result.push(link);
  });

  return result;
}

export const McNavMenu: React.FC = () => {
  const [isLanguageExpanded, setIsLanguageExpanded] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const renderLanguageDropdown = () => {
    return (
      <>
        <LanguageContainer>
          <LanguageButton onClick={() => setIsLanguageExpanded(!isLanguageExpanded)}>
            <LanguageIcon />
            Language
            <ChevronIcon />
          </LanguageButton>
          <LanguageList isLanguageExpanded={isLanguageExpanded}>
            {languageList.map((language) => {
              return (
                <LanguageListItem>
                  <Link href={language.href}>{language.text}</Link>
                </LanguageListItem>
              );
            })}
          </LanguageList>
        </LanguageContainer>
        <Footer />
      </>
    )
  }

  return (
    <StyledNavMenu
      isNavExpanded={isNavExpanded}
      childrenBefore={<NavHome isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />}
      navLinks={transformNavLinks(navLinks)}
      childrenAfter={renderLanguageDropdown()}
    />
  );
}
