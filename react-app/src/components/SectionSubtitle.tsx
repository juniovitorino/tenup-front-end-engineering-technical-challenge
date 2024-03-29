import styled from "styled-components";
import type {FC, PropsWithChildren} from "react";

interface SectionTitleProps {
  section?: string;
}

const StyledSubtitle = styled.h3`
  font-family: Cousine, sans-serif;
  font-size: clamp(1.6rem, 1.5257rem + 0.3048vw, 1.8rem);
  color: var(--${(p: SectionTitleProps) => p.section}-eyebrow-text);
  font-weight: 400;
  margin-top: 0;
`;

const SectionSubtitle: FC<PropsWithChildren & SectionTitleProps> = ({
  children,
  section,
}) => {
  return <StyledSubtitle section={section}>{children}</StyledSubtitle>;
};
export default SectionSubtitle;
