import { useEffect, useState, useCallback } from 'react';
import type { FC } from 'react';

import styled from 'styled-components'
import Logo from './Logo';
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
    <StyledHeader>
      <Logo isMobile={isMobile} />
    </StyledHeader>
  )
}

export default Header;
