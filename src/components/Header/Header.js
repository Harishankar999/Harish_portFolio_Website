import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineLinkedin,AiOutlineQrcode } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alginItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <AiOutlineQrcode size="2.5rem" />
          <Span>Harishankar </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Harishankar999" target="_blank">
        <AiFillGithub size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/harishankar-patra-8a0322230/" target="_blank">
        <AiOutlineLinkedin size="2.5rem" />
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
