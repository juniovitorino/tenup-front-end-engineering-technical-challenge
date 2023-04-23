import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface SectionTitleProps { }

const H3 = styled.h3``

const SectionTitle: FC<PropsWithChildren & SectionTitleProps> = ({ children }) => {
  return <H3>{children}</H3>;
}
export default SectionTitle;
