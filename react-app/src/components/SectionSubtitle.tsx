import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const StyledSubtitle = styled.h3`
  font-family: Cousine, sans-serif;
  color: var(--hero-eyebrow-text);
  font-weight: 400;
  margin-top: 0;
`

const SectionSubtitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}
export default SectionSubtitle;
