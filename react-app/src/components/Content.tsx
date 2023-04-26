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
  justify-content: space-around;
  align-items: center;
  color: var(--${(p: ContentSectionProps) => p.section}-text);
  padding: 10rem 9.6rem;
`
interface ColumnProps {
  "max-width"?: string
}
const StyledColumn = styled.div<ColumnProps>`
  max-width: ${(p: ColumnProps) => p["max-width"]};
`

const Content: FC<ContentSectionProps> = (props) => {
  return (
    <StyledContent data-testid="content-section">
      <StyledColumn>
        <img src="/public/images/device-mobile.png" />
      </StyledColumn>
      <StyledColumn max-width="45%">
        <SectionSubtitle {...props}>Eyebrow</SectionSubtitle>
        <SectionTitle {...props}>Generating relevante & engaging content</SectionTitle>
        <Paragraph {...props}>Non diam phasellus vestibulum lorem sed. Massa enim nec dui nunc mattis enim. Quisque egestas diam in arcu cursus euismod quis viverra. Eget arcu dictum varius duis at consecteur lorem donec massa.</Paragraph>
      </StyledColumn>
    </StyledContent>
  )
}

export default Content;
