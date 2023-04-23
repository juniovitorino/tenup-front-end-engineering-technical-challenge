import { useEffect, useState, useCallback } from 'react';
import type { FC } from 'react';

import styled from 'styled-components'
import Logo from './CompanyLogo';
import TopNavigationMenu from './TopNavigationMenu';
import SectionTitle from './SectionTitle';
import SectionSubtitle from './SectionSubtitle';
import Button from './Button';
import { isMobileDevice } from '../support/isMobileDevice';
import Paragraph from './Paragraph';

const StyledHeader = styled.header`
  width: 100%;
  min-height: 25vh;
  background-image: var(--hero-background);
`

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  background-image: url(/public/images/device-ipad.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20px;
  overflow: hidden;
  padding: 2rem 0;
`

const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  --max-width: 68%;

  &.header-head {
    padding: 0 2.8rem;
    overflow: hidden;
  }

  &.header-body {
    max-width: var(--max-width);
    margin: 0 auto;
    flex-direction: column;
  }

  &.header-body h3 {
    align-self: start;
  }

  &.header-footer {
    max-width: var(--max-width);
    margin: 0 auto;
    justify-content: space-around;
  }
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
      <Container>
        <ContainerRow className="header-head">
          <Logo isMobile={isMobile} />
          <TopNavigationMenu />
        </ContainerRow>
        <ContainerRow className="header-body">
          <SectionSubtitle>Who we are</SectionSubtitle>
          <SectionTitle>Engage brand and increase viewability.</SectionTitle>
          <Paragraph>Elementum sagittis vitae et leo duis ut. Eu
            feugiat pretium nibh ipsum consequat.</Paragraph>
        </ContainerRow>
        <ContainerRow className="header-footer">
          <Button href="https://example.com/download">Download Now</Button>
          <Button href="https://example.com/lean-more" isLink={true}>Learn More</Button>
        </ContainerRow>
      </Container>
    </StyledHeader>
  )
}

export default Header;
