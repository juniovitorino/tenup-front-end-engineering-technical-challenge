import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface AnchorProps {
  title?: string;
  ariaLabel?: string;
  href?: string;
  target?: string;
}

const StyledAnchor = styled.a<AnchorProps>``;

const AnchorLink: FC<PropsWithChildren & AnchorProps> = ({ title, ariaLabel, target, href, children }) => {
  if (!children || !href) return <></>;
  return <StyledAnchor data-testid="anchor-link" target={target} href={href} aria-label={ariaLabel} title={title}>{children}</StyledAnchor>
}

export default AnchorLink;
