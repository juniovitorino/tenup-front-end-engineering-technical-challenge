import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const StyledSectionTitle = styled.h2`
  font-family: Cousine, sans-serif;
  color: white;
  font-weight: 800;
  line-height: 36px;
  margin-top: 0;
`

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
}
export default SectionTitle;
