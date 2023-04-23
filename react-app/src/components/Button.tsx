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
  color: white;
  font-size: 1.8rem;
  text-align: center;
  letter-spacing: 0.04rem;
  padding: 1.8rem 2.8rem 1.8rem 2.6rem;
  box-sizing: border-box;
  transition: all 0.15s linear;

  &[role="button"] {
    border: 1px solid white;
    border-radius: 3rem;
    text-decoration: none;

    &:hover {
      background-color: var(--hero-eyebrow-text);
      border-color: var(--hero-eyebrow-text);
    }
  }

  &[role="link"] {
    letter-spacing: 0.06rem;
    text-underline-offset: 0.9rem;

    &:hover {
      color: var(--hero-eyebrow-text);
    }
  }
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
