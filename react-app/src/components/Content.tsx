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
  flex-direction: column;
  color: var(--${(p: ContentSectionProps) => p.section}-text);
  padding: 4rem 5rem;

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
  width: 100%;
`

const StyledColumn = styled.div`

  @media only screen and (min-width: 768px) {
    max-width: 41%;
  }

  `

const Content: FC<ContentSectionProps> = (props) => {
  return (
    <StyledContent data-testid="content-section">
      <StyledColumn>
        <StyledImage src="/public/images/device-mobile.png" alt="Mobile Phone with lines of code" />
      </StyledColumn>
      <StyledColumn>
        <SectionSubtitle {...props}>Eyebrow</SectionSubtitle>
        <SectionTitle {...props}>Generating relevant & engaging content</SectionTitle>
        <Paragraph {...props}>Non diam phasellus vestibulum lorem sed. Massa enim nec dui nunc mattis enim. Quisque egestas diam in arcu cursus euismod quis viverra. Eget arcu dictum varius duis at consecteur lorem donec massa.</Paragraph>
      </StyledColumn>
    </StyledContent>
  )
}

export default Content;
