import styled from "styled-components";
import type {FC, PropsWithChildren} from "react";

interface ParagraphProps {
  section?: string;
}

const StyledParagraph = styled.p<ParagraphProps>`
  color: var(--${(p: ParagraphProps) => p.section}-paragraph-text);
  font-family: Montserrat, sans-serif;
  font-size: clamp(1.6rem, 1.5257rem + 0.3048vw, 1.8rem);
  font-weight: 500;
  line-height: 3.3rem;
  letter-spacing: 0.039rem;
`;

const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({
  children,
  section,
}) => {
  return (
    <StyledParagraph data-testid="paragraph" section={section}>
      {children}
    </StyledParagraph>
  );
};
export default Paragraph;
