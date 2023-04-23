import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const StyledSectionTitle = styled.h2``

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
}
export default SectionTitle;
