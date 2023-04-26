import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps {
  section?: string;
}

const StyledSectionTitle = styled.h2<SectionTitleProps>`
  font-family: Montserrat, sans-serif;
  color: var(--${(p: SectionTitleProps) => p.section}-title-text);
  font-size: var(--${(p: SectionTitleProps) => p.section}-title-font-size);
  font-weight: bold;
  letter-spacing: 0.095rem;
  margin-top: 0;
  line-height: 6.76rem;
`

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({ children, section }) => {
  return <StyledSectionTitle section={section}>{children}</StyledSectionTitle>;
}
export default SectionTitle;
