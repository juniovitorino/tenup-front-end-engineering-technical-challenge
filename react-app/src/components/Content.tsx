import type { FC } from "react";
import styled from 'styled-components';
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import Paragraph from "./Paragraph";

interface ContentSectionProps {
  section?: string
}

const StyledContent = styled.section<ContentSectionProps>`
  display: flex;
  flex-direction: column-reverse;
  color: var(--${(p: ContentSectionProps) => p.section}-text);
  padding: 4rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
    align-items: center;
    padding: 10rem 3rem;
    justify-content: space-around;
  }
`
const StyledImage = styled.img`
  width: 90%;
`

const StyledColumn = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    max-width: 41%;
  }
`

const StyledContainer = styled.div`
  padding: 0 3rem;
`

const Content: FC<ContentSectionProps> = (props) => {
  return (
    <StyledContent data-testid="content-section">
      <StyledColumn>
        <StyledImage src="/public/images/device-mobile.png" alt="Mobile Phone with lines of code" />
      </StyledColumn>
      <StyledColumn>
        <StyledContainer>
          <SectionSubtitle {...props}>Eyebrow</SectionSubtitle>
          <SectionTitle {...props}>Generating relevant & engaging content</SectionTitle>
          <Paragraph {...props}>Non diam phasellus vestibulum lorem sed. Massa enim nec dui nunc mattis enim. Quisque egestas diam in arcu cursus euismod quis viverra. Eget arcu dictum varius duis at consecteur lorem donec massa.</Paragraph>
        </StyledContainer>
      </StyledColumn>
    </StyledContent>
  )
}

export default Content;
