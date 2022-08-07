import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! <br></br>I am Harishankar <br></br>
      </SectionTitle>
      <SectionText>
        I am an aspiring Full Stack Developer <br></br> based in India.
      </SectionText>

      {/*<--- button for resume download link ---> */}
      <a
        href="https://drive.google.com/file/d/19K6j4Z3okFmEck7inbdCYdcCF0d_k0hG/view"
       target={"_blank"}
      >
        <Button>Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
