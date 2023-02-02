import Image from 'next/image';
import React from 'react'
import { FooterSection, FooterCopyrightSection, FooterLink, FooterLinkList, FooterLinkListItem, StyledFooter, FooterLogoSection } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogoSection>
        <FooterLinkList>
          <FooterLinkListItem><FooterLink href="">Cookies Settings</FooterLink></FooterLinkListItem>
          <FooterLinkListItem><FooterLink href="">Terms & Conditions</FooterLink></FooterLinkListItem>
          <FooterLinkListItem><FooterLink href="">Privacy Policy</FooterLink></FooterLinkListItem>
        </FooterLinkList>
      </FooterLogoSection>
      <FooterSection>
        <Image src="/assets/logo_text.png" alt="" width={121} height={40} />
      </FooterSection>
      <FooterCopyrightSection>
        © 2023 Movember. All rights reserved.
      </FooterCopyrightSection>
    </StyledFooter>
  );
}
