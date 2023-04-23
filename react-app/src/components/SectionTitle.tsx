import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const StyledSectionTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  color: white;
  font-weight: bold;
  font-size: 62px;
  letter-spacing: 0.095rem;
  margin-top: 0;
  line-height: 6.76rem;
`

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
}
export default SectionTitle;
