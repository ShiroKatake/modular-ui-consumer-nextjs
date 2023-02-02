import Link from "next/link";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FooterSection = styled.section`
  font-size: 11px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterLogoSection = styled(FooterSection)`
  border-top: 2px solid rgb(232, 232, 232);
  border-bottom: 2px solid rgb(232, 232, 232);
`;

export const FooterCopyrightSection = styled(FooterSection)`
  text-align: center;
  background-color: black;
  color: white;
`;

export const FooterLinkList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const FooterLinkListItem = styled.li`
  &:not(:last-child)::after {
    font-size: 11px;
    font-weight: 400;
    content: "|";
    margin: 0 10px;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 11px;
  font-weight: 400;
  color: black;
`;

