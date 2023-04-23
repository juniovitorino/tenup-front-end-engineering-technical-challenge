import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface ParagraphProps { }

const H3 = styled.h3``

const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({ children }) => {
  return <p data-testid="paragraph">{children}</p>;
}
export default Paragraph;
