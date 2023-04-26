import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps {
  section?: string;
}

const StyledSubtitle = styled.h3`
  font-family: Cousine, sans-serif;
  color: var(--${(p: SectionTitleProps) => p.section}-eyebrow-text);
  font-weight: 400;
  margin-top: 0;
`

const SectionSubtitle: FC<PropsWithChildren & SectionTitleProps> = ({ children, section }) => {
  return <StyledSubtitle section={section}>{children}</StyledSubtitle>;
}
export default SectionSubtitle;
