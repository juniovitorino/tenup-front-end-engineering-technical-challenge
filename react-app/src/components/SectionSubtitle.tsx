import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const StyledSubtitle = styled.h3``

const SectionSubtitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}
export default SectionSubtitle;
