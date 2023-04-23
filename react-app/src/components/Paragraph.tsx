import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface ParagraphProps { }

const StyledParagraph = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  line-height: 28px;
  color: white;
`

const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({ children }) => {
  return <StyledParagraph data-testid="paragraph">{children}</StyledParagraph >
}
export default Paragraph;
