import type { FC } from "react";
import styled from 'styled-components';
import Button from "./Button";
import Paragraph from "./Paragraph";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

interface PrefooterProps {
  section?: string;
}

const StyledPrefooter = styled.section<PrefooterProps>`
  width: 100%;
  background-image: var(--prefooter-background), url("/public/images/phone.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
`

const StyledPrefooterContainer = styled.div`
  display: grid;
  place-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 10rem 0;
`

const StyledContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Prefooter: FC<PrefooterProps> = (props) => {
  return (
    <StyledPrefooter>
      <StyledPrefooterContainer>
        <StyledContent>
          <SectionSubtitle section={props.section}>Eyebrow</SectionSubtitle>
          <SectionTitle section={props.section}>Integrated tech</SectionTitle>
          <Paragraph section={props.section}>Create custom solutions with the aim to improve overall outcomes</Paragraph>
          <Button href="#">Contact Us</Button>
        </StyledContent>
      </StyledPrefooterContainer>
    </StyledPrefooter>
  )
}

export default Prefooter;
