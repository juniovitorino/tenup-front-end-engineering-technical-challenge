import { useEffect, useState, useCallback } from 'react';
import type { FC } from 'react';

import styled from 'styled-components'
import Logo from './CompanyLogo';
import TopNavigationMenu from './TopNavigationMenu';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import Button from './Button';
import { isMobileDevice } from '../support/isMobileDevice';

const StyledHeader = styled.header`
  width: 100%;
  min-height: 25vh;
  background-image: var(--hero-background);
`

const Header: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDevice());
  const responsiveLogoHandler = useCallback(() => setIsMobile(isMobileDevice()), [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', responsiveLogoHandler);
    return () => {
      window.removeEventListener('resize', responsiveLogoHandler);
    };
  }, [responsiveLogoHandler]);

  return (
    <StyledHeader data-testid="main-header">
      <Logo isMobile={isMobile} />
      <TopNavigationMenu />
      <SectionSubtitle>Who we are</SectionSubtitle>
      <SectionTitle>Engage brand and increase viewability.</SectionTitle>
      <Button href="https://example.com/download">Download Now</Button>
      <Button href="https://example.com/lean-more" isLink={true}>Learn More</Button>
    </StyledHeader>
  )
}

export default Header;
