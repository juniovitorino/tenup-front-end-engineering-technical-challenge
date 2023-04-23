import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface ParagraphProps { }

const StyledParagraph = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.3rem;
  letter-spacing: 0.039rem;
  color: white;
`

const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({ children }) => {
  return <StyledParagraph data-testid="paragraph">{children}</StyledParagraph >
}
export default Paragraph;
