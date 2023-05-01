import styled from "styled-components";
import type {FC, PropsWithChildren} from "react";

interface SectionTitleProps {
  section?: string;
}

const StyledSectionTitle = styled.h2<SectionTitleProps>`
  color: var(--${(p: SectionTitleProps) => p.section}-title-text);
  --font-size: var(--${(p: SectionTitleProps) => p.section}-title-font-size);
  font-size: clamp(2.6rem, 1.3371rem + 5.181vw, 6rem);
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  letter-spacing: 0.095rem;
  margin-top: 0;
`;

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({
  children,
  section,
}) => {
  return <StyledSectionTitle section={section}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
