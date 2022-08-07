import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  MadeBy,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <Link href="/">
            <span style={{ color: "#FFAB91", fontSize: "1.6rem" }}>
              <AiOutlineArrowUp />
              Home
            </span>
          </Link>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+91 8455993644</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>harishankarpatra999@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <CompanyContainer>
        <Link href="/" >
          <span style={{ color: "#FFAB91", fontSize: "1.6rem" ,cursor:"pointer"}}>
            <AiOutlineArrowUp />
            Home
          </span>
        </Link>
      </CompanyContainer>

      <br />

      <CompanyContainer>
        <LinkTitle>Call</LinkTitle>
        <LinkItem>+91{" "}8455993644</LinkItem>
      </CompanyContainer>

      <CompanyContainer>
        <LinkTitle>Email</LinkTitle>
        <LinkItem>harishankarpatra999@gmail.com</LinkItem>
      </CompanyContainer>

      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Harishankar999" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/harishankar-patra-8a0322230/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>

        <CompanyContainer>
          <Slogan>Made with ❣️ by Harishankar</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <MadeBy>Made with ❣️ by Harishankar</MadeBy>
    </FooterWrapper>
  );
};

export default Footer;
