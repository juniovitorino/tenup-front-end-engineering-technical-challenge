import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface AnchorProps {
  title?: string;
  ariaLabel?: string;
  href?: string;
  isLink?: boolean;
  target?: string;
}

const StyledAnchor = styled.a<AnchorProps>``;

const AnchorLink: FC<PropsWithChildren & AnchorProps> = (props) => {
  const { title, ariaLabel, target, href, children, isLink } = props;
  const ariaRole = isLink ? "link" : "button";

  if (!children || !href) return <></>;
  return <StyledAnchor
    data-testid="anchor"
    target={target}
    href={href}
    aria-label={ariaLabel}
    role={ariaRole}
    title={title}>{children}</StyledAnchor>
}

export default AnchorLink;
