import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';

interface AnchorProps {
  title?: string;
  ariaLabel?: string;
  href?: string;
  isLink?: boolean;
  target?: string;
}

const StyledAnchor = styled.a<AnchorProps>`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: clamp(1rem, 100%, 1.2rem);
  color: white;
  text-align: center;

  &[role="button"] {
    border: 1px solid white;
    border-radius: 2rem;
    text-decoration: none;
    padding: clamp(0.8rem, 100%, 1rem) clamp(1rem, 100%, 1.2rem);
  }

  &[role="link"] {}
`;

const Button: FC<PropsWithChildren & AnchorProps> = (props) => {
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

export default Button;
